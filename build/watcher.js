var gaze = require("gaze"),
    path = require("path");

module.exports = function(config, done) {
    gaze(["**/*.js", "**/*.css", "!**/styles.css", "!**/*scripts.js"], {
        cwd : config.cwd
    }, function() {
        this.on("all", function() {
            config.log("info", "Triggering Default Build");
            config.dullard.run([ "default" ], function() {
                config.log("info", "Finished Default Build");
            });
        });
    });
};