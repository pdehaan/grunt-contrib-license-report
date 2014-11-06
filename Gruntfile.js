module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['jshint']);


    // Plugin configuration(s).
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'lib/**/*.js']
        },
        mochaTest: {
            test: {
                options: {
                    bail: true,
                    reporter: 'dot'
                },
                src: ['test/**/*.spec.js']
            }
        }
    });
};