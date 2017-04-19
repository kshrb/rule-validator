'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> \n version : <%= pkg.version %> \n'+
                ' Build on : <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
            },
            build: {
                src: 'lib/<%= pkg.name %>.js',
                dest: 'lib/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js','!lib/**/*.min.js',],
            options: {
                "jshintrc": true
            }
        }
    });
    // Load the plugin.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // Default task(s).
    grunt.registerTask('default', ['jshint','uglify']);
};