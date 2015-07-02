"use strict";

module.exports = function(ms, callback) {
    var lastTime = window.performance.now();

    requestAnimationFrame(function ticker(timeNow) {
        if(timeNow - lastTime > ms) {
            callback(timeNow - lastTime);
            lastTime = timeNow;
        }

        requestAnimationFrame(ticker);
    });
};