const EVENT_TYPES = {
  INIT: 'INIT',
  START: 'START',
  SUBMIT: 'SUBMIT',
  QUIT: 'QUIT'
};

// window.H5SDK = (function() {
class H5SDK {

  _send(data, extraData) {
    console.log('send data: ', data);
    console.log('send extraData: ', extraData);
    try {
      const stringData = JSON.stringify(
        Object.assign(
          data,
          typeof extraData === 'object' && extraData || {}
        )
      );

      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(stringData);
      }

      if (window.postMessage) {
        window.postMessage(stringData, window.origin);

        if (document.referrer) {
          const origin = (new URL(document.referrer)).origin;

          if (origin &&
            (
              /^http[s]?:\/\/(.+\.)?storms\.com(:\d{2,6})?[/]?$/gi.test(origin) ||
              /^http[s]?:\/\/localhost(:\d{2,6})?[/]?$/gi.test(origin)
            )
          ) {
            window.parent.postMessage(stringData, origin);
          }
        }
      }

    } catch (err) {
      console.error('H5SDK._send Error: ', err);
    }
  }

  init (extraData){
    console.error('init extraData: ', extraData);
    this._send({ eventName: EVENT_TYPES.INIT }, extraData);
    return 'hello djay';
  }

  start (extraData) {
    _send({ eventName: EVENT_TYPES.START }, extraData);
  }

  submit (extraData) {
    if(extraData.hasOwnProperty('SCORE')) {
      extraData.SCORE = parseInt(extraData.SCORE);
    }
    _send({ eventName: EVENT_TYPES.SUBMIT }, extraData);
  }

  quit (extraData) {
    _send({ eventName: EVENT_TYPES.QUIT }, extraData);
  }

  debug () {
    window.addEventListener('message', function(event) {
      console.debug('PostMessage event: ', event);

      if (event.data) {
        console.debug('event.data: ', event.data);
      }
    }, false);
  }

  // function H5SDK() {}

  // H5SDK.prototype.init = function (extraData) {
  //   _send({ eventName: EVENT_TYPES.INIT }, extraData);
  // }

  // H5SDK.prototype.start = function (extraData) {
  //   _send({ eventName: EVENT_TYPES.START }, extraData);
  // }

  // H5SDK.prototype.submit = function (extraData) {
  //   if(extraData.hasOwnProperty('SCORE')) {
  //     extraData.SCORE = parseInt(extraData.SCORE);
  //   }
  //   _send({ eventName: EVENT_TYPES.SUBMIT }, extraData);
  // }

  // H5SDK.prototype.quit = function (extraData) {
  //   _send({ eventName: EVENT_TYPES.QUIT }, extraData);
  // }

  // H5SDK.prototype.debug = function () {
  //   window.addEventListener('message', function(event) {
  //     console.debug('PostMessage event: ', event);

  //     if (event.data) {
  //       console.debug('event.data: ', event.data);
  //     }
  //   }, false);
  // }

  // return new H5SDK();
// })();

}

export {
  EVENT_TYPES,
  H5SDK
};