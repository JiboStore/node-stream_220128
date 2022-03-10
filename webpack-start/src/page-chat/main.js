// import GoPlayChat from './goplay-chat'
// import Guard from './g-guard'
// import GoPlayChat from './g-goplaychat'
// import ReconnectingWebSocket from './g-reconnectingwebsocket'
//// import GoPlayChat from './goplay-chat'

// import Guard from './g-guard'
import GoPlayChat from './g-goplaychat'
// import ReconnectingWebSocket from './g-reconnectingwebsocket'


// import One from './mymodule'

import One from './mymodule-one'
import Two from './mymodule-two'
import Three from './mymodule-three'

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

function initChat_v1(slugId) {
    console.log('initChat: ' + slugId);
//   const options = {debug: true, isDevelopment: false}
    const options = {
        debug: false,
        isDevelopment: false,
        hostToken: 'eyJhbGciOiJQQkVTMi1IUzI1NitBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwicDJjIjoxMDAxLCJwMnMiOiJVdjM4QnlHQ1pVOFdQMThQbW1JZCJ9.yccrp5JshHHq4z8g27QLE8mAQEa2V8C4qXjA7YVLoR2qB-RoaCgjHw.BC1Jwt-yYST9fkvn_wgwEA.cH3M07pZlfdWLlqQT_dBBMuBqEEyhpgkl9naEezplhqjOrlwK64QF-qXwnyXoVAfZt0lAnE-MuacXSB63PbZYXBMJmPOuJfCNZCw5qmhcFIVA-lSPJVOD9x0bh22mv_lKc1ffkDyRmHwgwDEfnMGkX1eAiGjx35HBJ6DgzrBz-up2VDlvZEMtwl7HYcQ9j30fA3mHPQivS2FkQ4HDhJ20Emm_l47I-JqIGkWNkT-72K1-KAsvJXLraQFPxKJHqxm4U9_g5Ioqs-_pXeqqTGupOEcv1E9LI6qGawn5ZV_3l1TdoULib6jy1yrKH-UX85ppuhGduWIyDSynfpX3jAy5pqDovWBuvkN_GXfpc8AgvhvPC_pWTUkXrx3k9D-1rWQjHJ_PXNXhkGVGJlBQ_v9BA.7dhqSMIVuSOg9IUHKwbSgw'
    };

  const one = new One('hw');
  console.log('one: ', one);
  one.myone('room1', 'token1');

  const two = new Two('two');
  console.log('two:', two);
  two.mytwo('room2', 'token2');

  const three = new Three('three');
  console.log('three: ', three);
  three.mythree('room3', 'token3');
  /*
      Param: event-slug, options
  */
//   const chatSocket = gojek.GoPlayChat('last-forever', options)
// try {
    // console.log(JSON.stringify(gp));
    console.log(GoPlayChat)
const chatSocket = new GoPlayChat(slugId, options)
console.log(chatSocket)
// } catch {}
// console.log(chatSocket)

    const labelHello = document.getElementById('labelhello');
    const labelCount = document.getElementById('labelcount');
    const labelChat = document.getElementById('labelchat');
    const labelGift = document.getElementById('labelgift');

  /*
      Connection Callback
  */
  chatSocket.onConnected = (name) => {
      console.log('connected as:', name)
      labelHello.innerHTML = 'Hello: ' + name;
  }

  chatSocket.onDisconnected = (event) => {
      console.log('disconnected...')
      labelHello.innerHTML = "Byee...";
  }

  /*
      Message Received Callback
  */
  chatSocket.onGift = (objGift) => {
      console.log('gift received:', objGift)
      labelGift.innerHTML += objGift.item_id + " : " + objGift.frm + " => " + objGift.title_en + "<br>";
  }

  chatSocket.onChat = (id, from, message) => {
      console.log('chat received:', id, from, message)
      labelChat.innerHTML += from + " : " + message + "<br>";
  }

  chatSocket.onUserCount = (count) => {
      console.log('curr user count:', count)
      labelCount.innerHTML = ' userCount: [' + count + ']'
  }

  chatSocket.onLike = (from, count) => {
      console.log('like from:', from, count)
  }
}

var chatSocket = null;

function initChat(slugId, hostToken, isDev) {
    /*
        Option:
        debug boolean: print debug log
        isDevelopment boolean: connect to development or production env
        hostToken: string. Host authentication token, can be obtained from Dashboard Performer
    */
        var options = {
            debug: true,
            isDevelopment: isDev == '0' ? false : true,
            hostTokenX: 'eyJhbGciOiJQQkVTMi1IUzI1NitBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwicDJjIjoxMDAxLCJwMnMiOiJVdjM4QnlHQ1pVOFdQMThQbW1JZCJ9.yccrp5JshHHq4z8g27QLE8mAQEa2V8C4qXjA7YVLoR2qB-RoaCgjHw.BC1Jwt-yYST9fkvn_wgwEA.cH3M07pZlfdWLlqQT_dBBMuBqEEyhpgkl9naEezplhqjOrlwK64QF-qXwnyXoVAfZt0lAnE-MuacXSB63PbZYXBMJmPOuJfCNZCw5qmhcFIVA-lSPJVOD9x0bh22mv_lKc1ffkDyRmHwgwDEfnMGkX1eAiGjx35HBJ6DgzrBz-up2VDlvZEMtwl7HYcQ9j30fA3mHPQivS2FkQ4HDhJ20Emm_l47I-JqIGkWNkT-72K1-KAsvJXLraQFPxKJHqxm4U9_g5Ioqs-_pXeqqTGupOEcv1E9LI6qGawn5ZV_3l1TdoULib6jy1yrKH-UX85ppuhGduWIyDSynfpX3jAy5pqDovWBuvkN_GXfpc8AgvhvPC_pWTUkXrx3k9D-1rWQjHJ_PXNXhkGVGJlBQ_v9BA.7dhqSMIVuSOg9IUHKwbSgw'
        }

        if ( hostToken && hostToken.length > 0 ) {
            options = Object.assign(options, {hostToken})
        }

        // const options = {
        //     debug: false,
        //     isDevelopment: false
        // }

        /*
            Param: event-slug, options
        */
        const eventSlug = slugId
        chatSocket = new GoPlayChat(eventSlug, options)

        const labelHello = document.getElementById('labelhello');
        const labelCount = document.getElementById('labelcount');
        const labelChat = document.getElementById('labelchat');
        const labelGift = document.getElementById('labelgift');
        const labelTipmeter = document.getElementById('labeltipmeter');
        const labelLeaderboard = document.getElementById('labelleaderboard');

        /*
            Connection Callback
        */
        chatSocket.onConnected = (name) => {
            console.log(`${new Date().toISOString()} connected as ${name}`)
            labelHello.innerHTML = 'Hello: ' + name;
        }

        chatSocket.onDisconnected = (event) => {
            console.log(`${new Date().toISOString()} disconnected...`)
            labelHello.innerHTML = "Byee...";
        }

        /*
            Message Received Callback
        */
        chatSocket.onGift = (objGift) => {
            console.log(`${new Date().toISOString()} gift received:`, objGift)
            labelGift.innerHTML += objGift.id + ' = ' + objGift.item_id + ' cons_at: ' + objGift.cons_at + " : " + objGift.frm + " => " + objGift.title_en + "<br>";
        }

        chatSocket.onChat = (id, from, message) => {
            console.log(`${new Date().toISOString()} chat[${id}] ${from}: ${message}`)
            labelChat.innerHTML += from + " : " + message + "<br>";
        }

        chatSocket.onUserCount = (count) => {
            console.log(`${new Date().toISOString()} curr user count:${count}`)
            labelCount.innerHTML = ' userCount: [' + count + ']'
        }

        chatSocket.onLike = (from, count) => {
            console.log(`${new Date().toISOString()} ${from} likes count: ${count}`)
        }

        chatSocket.onTipmeter = (title, unit, progress, goal) => {
            console.log(`${new Date().toISOString()} tip meter: ${title} ${progress}/${goal} ${unit}`)
            labelTipmeter.innerHTML += 'Tipmeter: ' + title + ' unit: ' + unit + ' progress: ' + progress + ' goal: ' + goal + '<br>'
        }

        chatSocket.onLeaderboard = (type, unit, leaderboards) => {
            console.log(`${new Date().toISOString()} leaderboard type: ${type} ${unit}. Leaderboards:`, leaderboards)
            labelLeaderboard.innerHtml += 'Leaderboard type: ' + type + ' unit: ' + unit + '<br> leaderboards: ' + leaderboards + '<br>';
        }
}

export function clickChatConnect() {
    var textslugid = document.getElementById('textslugid');
    const slugid = textslugid.value;

    var texthosttoken = document.getElementById('texthosttoken');
    const hosttoken = texthosttoken.value;

    var textisdev = document.getElementById('textisdev');
    const isdev = textisdev.value;
    // console.log('clickChatConnect: ' + slugid);
    // alert('clickChatConnect: ' + slugid);
    initChat(slugid, hosttoken, isdev);
}

export function clickConsumeGift() {
    var textgiftid = document.getElementById('textgiftid');
    const giftid = textgiftid.value;
    console.log('giftid: ' + giftid);

    if ( chatSocket ) {
        console.log('consuming giftid: ' + giftid);
        chatSocket.consumeGift(parseInt(giftid));
    }
}

export function sendCallParentFunction(param) {
  // https://stackoverflow.com/questions/2161388/calling-a-parent-window-function-from-an-iframe
  // https://stackoverflow.com/questions/251420/invoking-javascript-code-in-an-iframe-from-the-parent-page
  // https://stackoverflow.com/questions/25098021/securityerror-blocked-a-frame-with-origin-from-accessing-a-cross-origin-frame
    console.log('sendCallParentFunction', param)
    // window.parent.parentFunc();
    // window.parent.postMessage('helloWorld', {score: 10});
    console.log(window);
    console.log('origin: ' + window.origin);
    console.log('document.referer', document.referer);
    // console.log('parent url: ', window.parent.origin); // CORS
    // window.parent.postMessage('helloWorld', 'http://localhost:8000/'); // has to be parent's url
    window.parent.postMessage('helloWorld', '*');
}

export function receiveCallFromParentFunction(param) {
    console.log('sendCallParentFunction', param)
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-chat')
  console.log('Image through require()', img)

//   initChat('last-forever');

  // https://stackoverflow.com/questions/58587016/how-to-use-function-declared-in-js-file-that-built-by-webpack-in-html
  document.getElementById('btnconnect').addEventListener('click', clickChatConnect);

  document.getElementById('btnconsumegift').addEventListener('click', clickConsumeGift);

  document.getElementById('btnsendcallparent').addEventListener('click', sendCallParentFunction);
})
