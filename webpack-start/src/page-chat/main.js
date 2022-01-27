// import GoPlayChat from './goplay-chat'
// import Guard from './g-guard'
// import GoPlayChat from './g-goplaychat'
// import ReconnectingWebSocket from './g-reconnectingwebsocket'
import GoPlayChat from './goplay-chat'
// const gp = require('./goplay-chat')
// import GoPlayChat from './goplay-chat'
// const gojek = require('./goplay-chat')
// const { GoPlayChat } = gojek
// import * as gojek from './goplay-chat'
require('normalize.css/normalize.css')
require('../css/main.css')
require('./page.css')
const img = require('../img/unicorn.jpg')

// const GoPlayChat = require('./goplay-chat')

// console.log(gojek)
// console.log(gojek.GoPlayChat)
console.log(global)

function initChat() {
  const options = {debug: true, isDevelopment: false}
  /*
      Param: event-slug, options
  */
//   const chatSocket = gojek.GoPlayChat('last-forever', options)
// try {
    // console.log(JSON.stringify(gp));
    console.log(GoPlayChat)
const chatSocket = new GoPlayChat('last-forever', options)
console.log(chatSocket)
// } catch {}
// console.log(chatSocket)

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

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-chat')
  console.log('Image through require()', img)

  initChat();
})
