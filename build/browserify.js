"use strict";

var browserify = require("browserify"),
    fs         = require("fs"),
    path       = require("path");

module.exports = function browserIt(config, done) {
    var exit  = "./scripts.js",
        entry = "./index.js";

    var b = browserify({
        debug : true,
        paths : [ path.join(config.cwd, "lib") ]
    });

    b.add(entry);
    b.bundle(function(err, res) {
        if(err) {
            config.log("error", err);
        } else {
            fs.writeFileSync(exit, res);
        }
        done();
    });
};
