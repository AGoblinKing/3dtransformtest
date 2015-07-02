/*jshint node:true*/
"use strict";

var eases = require("eases"),
    reverse = function(t, length) {
        var half = length/2;
        return Math.abs(Math.floor(t/half) - (t /half % 1));
    },
    forward = function(t, length) {
        return t/length;
    };

module.exports = function(fn, opts) {
    var t = 0;

    return function update(ms) {
        t = (t + ms) % opts.length;

        return eases[fn](opts.reverse ? reverse(t, opts.length) : forward(t, opts.length));
    }
};