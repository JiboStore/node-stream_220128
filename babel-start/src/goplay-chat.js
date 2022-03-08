(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        global.Guard = factory();
    }
})(this, function () {
    const ActionTypeJoinChatRoom    = 'join_chat_room'
    const ActionTypeJoinChatSuccess = 'join_chat_success'

    function Guard(options) {
        var self = this;
        self.connect = (url) => {
            guardSocket = new ReconnectingWebSocket(url, null, options);            
            guardSocket.onopen = function(event) {
                joinChatPayload = {'action_type': ActionTypeJoinChatRoom}
                guardSocket.send(JSON.stringify(joinChatPayload))
            };

            guardSocket.onmessage = function(event) {
                eventData = JSON.parse(event.data)
                switch(eventData.action_type){
                    case ActionTypeJoinChatSuccess:
                        self.onJoinChatGranted(eventData.room_id, eventData.token)
                        break
                }
            }
        }
    }

    Guard.prototype.onJoinChatGranted = function (roomId, token) { };    

    return Guard;
});

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        global.GoPlayChat = factory();
    }
})(this, function () {
    const CONTENT_TYPE_AUTH             = 10
    const CONTENT_TYPE_CHAT             = 20
    const CONTENT_TYPE_TICKER           = 36
    const CONTENT_TYPE_NEWS_TICKER      = 37
    const CONTENT_TYPE_SHOUTOUT         = 38
    const CONTENT_TYPE_SHOP_MERCHANDISE = 60
    const CONTENT_TYPE_LIKE             = 81
    const CONTENT_TYPE_GIFT             = 82
    const CONTENT_TYPE_TIP_METER        = 85
    const CONTENT_TYPE_LEADERBOARD      = 86
    const API_HOST_INT                  = 'https://g-gsapi.goplay.co.id';
    const API_HOST_PRD                  = 'https://gsapi.goplay.co.id';

    function GoPlayChat(eventSlug, options) {        
        var self = this;
        var chatSocket = null;
        if (!options) { options = {}; }

        // Default options
        self.options = {
            /** Whether this instance should log debug messages. */
            debug: false,            

            /** The number of milliseconds to delay before attempting to reconnect. */
            reconnectInterval: 1000,
            /** The maximum number of milliseconds to delay a reconnection attempt. */
            maxReconnectInterval: 30000,
            /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
            reconnectDecay: 1.5,

            /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
            timeoutInterval: 2000,

            /** The maximum number of reconnection attempts to make. Unlimited if null. */
            maxReconnectAttempts: null,

            isDevelopment: true,
            /** Whether or not the websocket should attempt to connect immediately upon instantiation. */
            //automaticOpen: true,
        }

        // Overwrite and define settings with options if they exist.
        for (var key in self.options) {
            if (typeof options[key] !== 'undefined') {
                self.options[key] = options[key];
            }
        }
        
        const chatHost = self.options.isDevelopment?'wss://g-gschat.goplay.co.id':'wss://gschat.goplay.co.id'
        const guardSocket = new Guard(self.options)

        const API_HOST = self.options.isDevelopment?API_HOST_INT:API_HOST_PRD;
        fetch(`${API_HOST}/public/v1/event_detail/${encodeURI(eventSlug)}`)
        .then(response => response.json())
        .then(response => {
            !self.options.debug || console.log(response)
            guardSocket.connect(response.data.guard_url)
        });
        
        
        guardSocket.onJoinChatGranted = (roomId, token) => {
            chatSocket = chatSocket || new ReconnectingWebSocket(`${chatHost}/chat`, null, self.options);
            chatSocket.onopen = function (event) {
                authPayload = {
                    ct: CONTENT_TYPE_AUTH,
                    room_id: roomId,
                    recon: event.isReconnect,
                    token: token
                }
                chatSocket.send(JSON.stringify(authPayload))                
                !self.options.debug || console.log("joining chat-room", self.options.debug, authPayload)
            };

            chatSocket.onclose = function (event) {
                self.onDisconnected(event)
                !self.options.debug || console.log('socket closed', event)
            };            

            chatSocket.onmessage = function (event) {
                eventData = JSON.parse(event.data)
                !self.options.debug || console.log('recevied', event, eventData)
                switch(eventData.ct) {
                    case CONTENT_TYPE_AUTH:
                        self.onConnected(eventData.name)
                        break;
                    case CONTENT_TYPE_CHAT:
                        self.onChat(eventData.id, eventData.frm, eventData.msg)
                        break;
                    case CONTENT_TYPE_TICKER:
                        self.onUserCount(eventData.cnt)
                        break;
                    case CONTENT_TYPE_NEWS_TICKER:                    
                        break;
                    case CONTENT_TYPE_SHOUTOUT:
                        break;
                    case CONTENT_TYPE_SHOP_MERCHANDISE:
                        break;
                    case CONTENT_TYPE_LIKE:
                        self.onLike(eventData.frm, eventData.ctr)
                        break;
                    case CONTENT_TYPE_GIFT:
                        self.onGift(eventData)
                        break;
                    case CONTENT_TYPE_TIP_METER:
                        break;
                    case CONTENT_TYPE_LEADERBOARD:
                        break;
                }
            }           
        }        
    }

    GoPlayChat.prototype.onConnected = function (name) { };
    GoPlayChat.prototype.onDisconnected = function (event) { };
    GoPlayChat.prototype.onUserCount = function (count) { };
    GoPlayChat.prototype.onChat = function (id, from, message) { };
    GoPlayChat.prototype.onGift = function (gift_object) { };
    GoPlayChat.prototype.onLike = function (count) { };

    return GoPlayChat;
});


(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports){
        module.exports = factory();
    } else {
        global.ReconnectingWebSocket = factory();
    }
})(this, function () {

    if (!('WebSocket' in window)) {
        return;
    }

    function ReconnectingWebSocket(url, protocols, options) {

        // Default settings
        var settings = {

            /** Whether this instance should log debug messages. */
            debug: false,

            /** Whether or not the websocket should attempt to connect immediately upon instantiation. */
            automaticOpen: true,

            /** The number of milliseconds to delay before attempting to reconnect. */
            reconnectInterval: 1000,
            /** The maximum number of milliseconds to delay a reconnection attempt. */
            maxReconnectInterval: 30000,
            /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
            reconnectDecay: 1.5,

            /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
            timeoutInterval: 2000,

            /** The maximum number of reconnection attempts to make. Unlimited if null. */
            maxReconnectAttempts: null,

            /** The binary type, possible values 'blob' or 'arraybuffer', default 'blob'. */
            binaryType: 'blob'
        }
        if (!options) { options = {}; }

        // Overwrite and define settings with options if they exist.
        for (var key in settings) {
            if (typeof options[key] !== 'undefined') {
                this[key] = options[key];
            } else {
                this[key] = settings[key];
            }
        }

        // These should be treated as read-only properties

        /** The URL as resolved by the constructor. This is always an absolute URL. Read only. */
        this.url = url;

        /** The number of attempted reconnects since starting, or the last successful connection. Read only. */
        this.reconnectAttempts = 0;

        /**
         * The current state of the connection.
         * Can be one of: WebSocket.CONNECTING, WebSocket.OPEN, WebSocket.CLOSING, WebSocket.CLOSED
         * Read only.
         */
        this.readyState = WebSocket.CONNECTING;

        /**
         * A string indicating the name of the sub-protocol the server selected; this will be one of
         * the strings specified in the protocols parameter when creating the WebSocket object.
         * Read only.
         */
        this.protocol = null;

        // Private state variables

        var self = this;
        var ws;
        var forcedClose = false;
        var timedOut = false;
        var eventTarget = document.createElement('div');

        // Wire up "on*" properties as event handlers

        eventTarget.addEventListener('open',       function(event) { self.onopen(event); });
        eventTarget.addEventListener('close',      function(event) { self.onclose(event); });
        eventTarget.addEventListener('connecting', function(event) { self.onconnecting(event); });
        eventTarget.addEventListener('message',    function(event) { self.onmessage(event); });
        eventTarget.addEventListener('error',      function(event) { self.onerror(event); });

        // Expose the API required by EventTarget

        this.addEventListener = eventTarget.addEventListener.bind(eventTarget);
        this.removeEventListener = eventTarget.removeEventListener.bind(eventTarget);
        this.dispatchEvent = eventTarget.dispatchEvent.bind(eventTarget);

        /**
         * This function generates an event that is compatible with standard
         * compliant browsers and IE9 - IE11
         *
         * This will prevent the error:
         * Object doesn't support this action
         *
         * http://stackoverflow.com/questions/19345392/why-arent-my-parameters-getting-passed-through-to-a-dispatched-event/19345563#19345563
         * @param s String The name that the event should use
         * @param args Object an optional object that the event will use
         */
        function generateEvent(s, args) {
        	var evt = document.createEvent("CustomEvent");
        	evt.initCustomEvent(s, false, false, args);
        	return evt;
        };

        this.open = function (reconnectAttempt) {
            ws = new WebSocket(self.url, protocols || []);
            ws.binaryType = this.binaryType;

            if (reconnectAttempt) {
                if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) {
                    return;
                }
            } else {
                eventTarget.dispatchEvent(generateEvent('connecting'));
                this.reconnectAttempts = 0;
            }

            if (self.debug || ReconnectingWebSocket.debugAll) {
                console.debug('ReconnectingWebSocket', 'attempt-connect', self.url);
            }

            var localWs = ws;
            var timeout = setTimeout(function() {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'connection-timeout', self.url);
                }
                timedOut = true;
                localWs.close();
                timedOut = false;
            }, self.timeoutInterval);

            ws.onopen = function(event) {
                clearTimeout(timeout);
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onopen', self.url);
                }
                self.protocol = ws.protocol;
                self.readyState = WebSocket.OPEN;
                self.reconnectAttempts = 0;
                var e = generateEvent('open');
                e.isReconnect = reconnectAttempt;
                reconnectAttempt = false;
                eventTarget.dispatchEvent(e);
            };

            ws.onclose = function(event) {
                clearTimeout(timeout);
                ws = null;
                if (forcedClose) {
                    self.readyState = WebSocket.CLOSED;
                    eventTarget.dispatchEvent(generateEvent('close'));
                } else {
                    self.readyState = WebSocket.CONNECTING;
                    var e = generateEvent('connecting');
                    e.code = event.code;
                    e.reason = event.reason;
                    e.wasClean = event.wasClean;
                    eventTarget.dispatchEvent(e);
                    if (!reconnectAttempt && !timedOut) {
                        if (self.debug || ReconnectingWebSocket.debugAll) {
                            console.debug('ReconnectingWebSocket', 'onclose', self.url);
                        }
                        eventTarget.dispatchEvent(generateEvent('close'));
                    }

                    var timeout = self.reconnectInterval * Math.pow(self.reconnectDecay, self.reconnectAttempts);
                    setTimeout(function() {
                        self.reconnectAttempts++;
                        self.open(true);
                    }, timeout > self.maxReconnectInterval ? self.maxReconnectInterval : timeout);
                }
            };
            ws.onmessage = function(event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onmessage', self.url, event.data);
                }
                var e = generateEvent('message');
                e.data = event.data;
                eventTarget.dispatchEvent(e);
            };
            ws.onerror = function(event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onerror', self.url, event);
                }
                eventTarget.dispatchEvent(generateEvent('error'));
            };
        }

        // Whether or not to create a websocket upon instantiation
        if (this.automaticOpen == true) {
            this.open(false);
        }

        /**
         * Transmits data to the server over the WebSocket connection.
         *
         * @param data a text string, ArrayBuffer or Blob to send to the server.
         */
        this.send = function(data) {
            if (ws) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'send', self.url, data);
                }
                return ws.send(data);
            } else {
                throw 'INVALID_STATE_ERR : Pausing to reconnect websocket';
            }
        };

        /**
         * Closes the WebSocket connection or connection attempt, if any.
         * If the connection is already CLOSED, this method does nothing.
         */
        this.close = function(code, reason) {
            // Default CLOSE_NORMAL code
            if (typeof code == 'undefined') {
                code = 1000;
            }
            forcedClose = true;
            if (ws) {
                ws.close(code, reason);
            }
        };

        /**
         * Additional public API method to refresh the connection if still open (close, re-open).
         * For example, if the app suspects bad data / missed heart beats, it can try to refresh.
         */
        this.refresh = function() {
            if (ws) {
                ws.close();
            }
        };
    }

    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data.
     */
    ReconnectingWebSocket.prototype.onopen = function(event) {};
    /** An event listener to be called when the WebSocket connection's readyState changes to CLOSED. */
    ReconnectingWebSocket.prototype.onclose = function(event) {};
    /** An event listener to be called when a connection begins being attempted. */
    ReconnectingWebSocket.prototype.onconnecting = function(event) {};
    /** An event listener to be called when a message is received from the server. */
    ReconnectingWebSocket.prototype.onmessage = function(event) {};
    /** An event listener to be called when an error occurs. */
    ReconnectingWebSocket.prototype.onerror = function(event) {};

    /**
     * Whether all instances of ReconnectingWebSocket should log debug messages.
     * Setting this to true is the equivalent of setting all instances of ReconnectingWebSocket.debug to true.
     */
    ReconnectingWebSocket.debugAll = false;

    ReconnectingWebSocket.CONNECTING = WebSocket.CONNECTING;
    ReconnectingWebSocket.OPEN = WebSocket.OPEN;
    ReconnectingWebSocket.CLOSING = WebSocket.CLOSING;
    ReconnectingWebSocket.CLOSED = WebSocket.CLOSED;

    return ReconnectingWebSocket;
});
