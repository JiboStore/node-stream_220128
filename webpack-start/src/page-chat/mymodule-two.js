(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        console.log('my amd Two');
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        console.log('my cjs Two');
        module.exports = factory();
    } else {
        console.log('my esm Two');
        global.Two = factory();
    }
})(this, function () {
    console.log('hello Two');

    function Two(options) {
        console.log("function Two", options);
        var self = this;
        self.connect = (url) => {
            console.log('Two.connect: ' + url)
        }
    }

    Two.prototype.mytwo = function (roomId, token) { 
        console.log('mytwo: ' + roomId + ', ' + token);
    };

    return Two;
});
