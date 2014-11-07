# grunt-contrib-license-report
[![NPM version](https://badge.fury.io/js/grunt-contrib-license-report.svg)](http://badge.fury.io/js/grunt-contrib-license-report)
[![dependencies](https://david-dm.org/fkscorpion/grunt-contrib-license-report.svg)](https://david-dm.org/fkscorpion/grunt-contrib-license-report)
[![devDependency Status](https://david-dm.org/fkscorpion/grunt-contrib-license-report/dev-status.svg?theme=shields.io)](https://david-dm.org/fkscorpion/grunt-contrib-license-report#info=devDependencies)

Discovers all licenses used in one package and generates a small HTML report

## Usage

    npm install grunt-contrib-license-report --save-dev

## Configuration

### Load task

    grunt.loadNpmTasks('grunt-contrib-license-report');

### Set task options

- `target` (mandatory): relative path to the location, where the report file will be stored.

        // Plugin configuration(s).
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            "license-report": {
                target: './report/licenses.html'
            }
        });
