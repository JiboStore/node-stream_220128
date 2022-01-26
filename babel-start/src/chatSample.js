class chatSample {
    init() {
        /*
                Option:
                debug boolean: print debug log
                isDevelopment boolean: connect to development or production env
            */
                const options = {debug: true, isDevelopment: false}
                /*
                    Param: event-slug, options
                */
                const chatSocket = new GoPlayChat("last-forever", options)
    
                /*
                    Connection Callback
                */
                chatSocket.onConnected = (name) => {
                    console.log('connected as:', name)
                }
    
                chatSocket.onDisconnected = (event) => {
                    console.log('disconnected...')
                }
    
                /*
                    Message Received Callback
                */
                chatSocket.onGift = (objGift) => {
                    console.log('gift received:', objGift)
                }
    
                chatSocket.onChat = (id, from, message) => {
                    console.log('chat received:', id, from, message)
                }
    
                chatSocket.onUserCount = (count) => {
                    console.log('curr user count:', count)
                }
    
                chatSocket.onLike = (from, count) => {
                    console.log('like from:', from, count)
                }
    }
}

export default chatSample;