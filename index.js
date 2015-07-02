"use strict";

var m = require("mithril"),
    person = require("./c/person"),
    cube = require("./c/cube"),
    input = require("input"),
    logic  = require("logic"),
    ticker = require("ticker"),
    easer = require("easer");


var cubes = [];

function addCube() {
    cubes.push({
        ry : 0,
        h : 500,
        color : "blue", //"rgba(" + [Math.random() * 255, Math.random() * 255, Math.random() * 255, 1].join(",") + ")",
        easer : easer("bounceInOut", {
            reverse  : true,
            length : 3000
        })
    });
}

m.mount(document.body, {
    controller : function() {
        var ctrl = this,
            easeTime = 0;

        ctrl.viewport = {
            ry : 0
        };

        ctrl.cube = { ry : 0, h : 0 };


        ticker(1000/60, function(ms) {
            ctrl.viewport.ry += 1;
            logic.reset(ctrl.viewport, "ry", 360);

            cubes.forEach(function(cube) {
                cube.ry += 1;
                cube.h = cube.easer(ms) * 500;
                logic.reset(cube, "ry", 360);
            });

            m.redraw(true);

        });

        addCube();
    },
    view : function(ctrl) {
        return m("#viewport.center.hbox.flex", {
            style : {
                webkitTransform : "rotateY(" + ctrl.viewport.ry + "deg)"
            },
            onclick : addCube
        }, [
            cubes.map(m.component.bind(null, cube))
        ]);
    }
});