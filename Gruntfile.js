module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-license-report');

    // Default task(s).
    grunt.registerTask('default', ['license-report']);


    // Plugin configuration(s).
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        "license-report": {
            target: './licenses.html'
        }
    });
};