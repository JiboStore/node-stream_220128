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

    One.prototype.onJoinChatGranted = function (roomId, token) { };

    return One;
});

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

    Two.prototype.onJoinChatGranted = function (roomId, token) { };

    return Two;
});

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        console.log('my amd Three');
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        console.log('my cjs Three');
        module.exports = factory();
    } else {
        console.log('my esm Three');
        global.Three = factory();
    }
})(this, function () {
    console.log('hello Three');

    function Three(options) {
        console.log("function Three", options);
        var self = this;
        self.connect = (url) => {
            console.log('Three.connect: ' + url)
        }
    }

    Three.prototype.onJoinChatGranted = function (roomId, token) { };

    return Three;
});