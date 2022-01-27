(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        console.log('my amd One');
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        console.log('my cjs One');
        module.exports = factory();
    } else {
        console.log('my esm One');
        global.One = factory();
    }
})(this, function () {
    console.log('hello One');

    function One(options) {
        console.log("function One", options);
        var self = this;
        self.connect = (url) => {
            console.log('One.connect: ' + url)
        }
    }

    One.prototype.myone = function (roomId, token) {
        console.log('myone: ' + roomId + ', ' + token);
     }

    return One;
});