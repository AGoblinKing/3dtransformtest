"use strict";

var globule = require("globule"),
    path    = require("path"),
    autoprefixer = require("autoprefixer-core"),
    fs      = require("fs");

var prefixer = autoprefixer({ browsers : [ "> 1%", "Chrome >= 30" ] });


function findFiles(filePath) {
    return globule
        .find([ "**/*.css", "!node_modules/**/*", "!**/styles.css" ], {
            cwd    : filePath,
            nocase : true
        })
        .map(function(file) {
            return path.join(filePath, file);
        });
}

module.exports = function(config, done) {
    var outPath = path.join(config.cwd, "styles.css"),
        css = findFiles(config.cwd)
            .map(function(filePath) {
                return fs.readFileSync(filePath);
            })
            .join("");

    prefixer.process(css).then(function(result) {
        fs.writeFileSync(outPath, result.css, {
            flag : "w"
        });
;
        done();
    });
};