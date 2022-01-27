const Guard = require('./g-guard');
const ReconnectingWebSocket = require('./g-reconnectingwebsocket');

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        global.GoPlayChat = factory();
    }
})(this, function () {
    console.log('hello')
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
            debug: true,

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
            console.log('guard_url: ' + response.data.guard_url)
            console.log(response)
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
