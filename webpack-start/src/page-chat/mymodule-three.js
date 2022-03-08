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

    Three.prototype.mythree = function (roomId, token) { 
        console.log('mythree: ' + roomId + ', ' + token);
    };

    return Three;
});