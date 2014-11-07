module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // load the other tasks.
    grunt.loadNpmTasks('grunt-mocha-test');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'mochaTest']);


    // Plugin configuration(s).
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['package.json', 'Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
        },
        mochaTest: {
            test: {
                options: {
                    bail: true,
                    reporter: 'dot'
                },
                src: ['test/**/*.spec.js']
            }
        },
        "license-report": {
            target: './report/licenses.html'
        }

    });
};
