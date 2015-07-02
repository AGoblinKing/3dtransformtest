"use strict";

var input = {
    keys : {}
};

document.body.addEventListener("keydown", function(e) {
    input.keys[String.fromCharCode(e.keyCode)] = true;
});

document.body.addEventListener("keyup", function(e) {
    input.keys[String.fromCharCode(e.keyCode)] = false;
});

module.exports = input;