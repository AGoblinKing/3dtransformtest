"use strict";
var m = require("mithril"),
    logic = require("logic");


var boxSides = [ "top", "bottom", "front", "back", "left", "right" ];

module.exports = {
    box : function(dims, opts, sideFn) {
        return m(".shape.box", opts, boxSides.map(function(side) {
            var sideOpts = sideFn ? sideFn() : {
                    style : { transform : {} },
                    key : side
                },
                style = sideOpts.style;


            // figure out better way
            switch(side) {
                case "top":
                    style.transform = logic.transform({ rx : 90, z : dims.h/2 });
                    style.width = dims.w;
                    style.height = dims.d;
                    break;

                case "bottom":
                    style.transform = logic.transform({ rx : -90, z : dims.h/2 });
                    style.width = dims.w;
                    style.height = dims.d;
                    break;

                case "front":
                    style.transform = logic.transform({ z : dims.d/2 });
                    style.width = dims.w;
                    style.height = dims.h;
                    break;

                case "back":
                    style.transform = logic.transform({ rx: 180, z : dims.d/2 });
                    style.width = dims.w;
                    style.height = dims.h;
                    break;

                case "right":
                    style.transform = logic.transform({ ry : 90, z : dims.w/2 });
                    style.width = dims.d;
                    style.height = dims.h;
                    break;
                case "left":
                    style.transform = logic.transform({ ry : -90, z : dims.w/2 });
                    style.width = dims.d;
                    style.height = dims.h;
                    break;
            }

            // ugh
            style.width += "px";
            style.height += "px";
            style.webkitTransform = style.transform;

            return m(".side", sideOpts);
        }));
    }
}