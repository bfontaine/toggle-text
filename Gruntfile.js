/*jshint node: true */

"use strict";

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            files: [
                "toggle-text.js"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        }
    });

    for (var key in grunt.file.readJSON("package.json").devDependencies) {
        if (/^grunt-/.test(key)) {
            grunt.loadNpmTasks(key);
        }
    }

    grunt.registerTask("default", ["jshint"]);
    grunt.registerTask("ci", ["jshint"]);
};
