"use strict";

var m = require("mithril"),
    shapes = require("shapes");

module.exports = {
    view : function(ctrl, args) {

        return shapes.box({ w : args.h, h : args.h, d : args.h }, {
            style : {
                webkitTransform : "rotateY(" + args.ry + "deg) rotateX(" + args.ry + "deg)",
                margin: "-50px"
            }
        }, function(key) {
            return {
                style : {
                    backgroundColor : args.color,
                    opacity: .5
                }
            }
        });
    }
};