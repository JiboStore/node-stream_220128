const ReconnectingWebSocket = require('./g-reconnectingwebsocket');

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
