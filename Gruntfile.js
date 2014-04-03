/*jshint node: true */

"use strict";

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: [
                "toggle-text.js"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        }
    });

    grunt.registerTask("default", ["jshint"]);
    grunt.registerTask("ci", ["jshint"]);
};
