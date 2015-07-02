"use strict";

module.exports = {
    reset : function(obj, prop, max) {
        if(obj[prop] >= max) {
            obj[prop] = obj[prop] - max;
        }
    },
    //  params = { x, y, z, rx, ry, rz }
    transform : function(params) {
        var string = "";

        string += ["rx", "ry", "rz"].reduce(function(string, key) {
            return string + (params[key] ? "rotate" + key[1].toUpperCase() + "(" + params[key] + "deg)" : "");
        }, "");


        string += "translate3d(" + ["x", "y", "z"].map(function(key) {
            return (params[key] ? params[key] : 0) + "px";
        }).join(",") + ")";

        return string;
    }
};