function initGoPlayWebsocket(){
  const options = {debug: true, isDevelopment: false}

  const chatSocket = new GoPlayChat("last-forever", options)


  chatSocket.onConnected = (name) => {
      console.log('connected as:', name)
  }

  chatSocket.onDisconnected = (event) => {
      console.log('disconnected...')
  }

  chatSocket.onGift = (objGift) => {
      console.log('gift received:', objGift)
      mappingGiftToAsset(objGift)
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

function changeBallText(giftName){
  console.log('changing ball text to:'+giftName)
}
function hideBall(){
  console.log('hide the ball')
}

function mappingGiftToAsset(gift){
  switch(gift.item_id){
    case 93:
      hideBall();
      break;
    default:
      changeBallText(gift.title_en)
  }
}

initGoPlayWebsocket()
