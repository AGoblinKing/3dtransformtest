"use strict";

var m = require("mithril"),
    parts = [ "head", "body", "body-lower", "larm", "rarm", "lleg", "rleg" ],
    input = require("input.js");


function showPart(color, part) {
    return m(".circle.hbox.center", {
        class : part,
        style : {
            backgroundColor : color
        }
    }, part);
}
module.exports = {
    controller : function(args) {

    },
    view : function(ctrl, args) {
        var color = args.color ? args.color : "aliceblue";
        return m(".person", parts.map(showPart.bind(null, color)));
    }
};