'use strict';


module.exports = function(grunt) {
  var checker = require('license-checker'),
    sanitize = require('./lib/sanitize'),
    project = require('../package.json');

  grunt.registerMultiTask('license-report', 'Discovers all licenses used in one package and generates a small HTML report.', function () {
// Merge task-specific and/or target-specific options with these defaults.
    var options = this.options(grunt.config.data['license-report']);
    var done = this.async();

    checker.init({
      start: './'
    }, function (json) {

      var output = '<!DOCTYPE html>\n<html><head><title>License report for ' + project.name + ' v' + project.version + '</title>\n' +
        '<style type="text/css">\n' +
        'html, body {\n' +
        'background-color: #FFFFFF;\n' +
        'color: #333333\n' +
        'padding: 0:\n' +
        'margin: 0;\n' +
        '}\n' +
        'table th, td {\n' +
        'text-align: left;\n' +
        '}</style>\n</head>\n<body>\n<h1>License report for ' + project.name + ' v' + project.version + '</h1>\n<table border="1">\n<tr>\n<th>Project</th><th>License</th><th>Repository</th>\n</tr>';

      var packageNames = Object.getOwnPropertyNames(json);

      packageNames.forEach(function (packageName) {

        output += '\n<tr>\n<td>' + packageName + '</td>';



        output += '\n<td>' + sanitize(json[packageName].licenses, packageName, grunt) + '</td>';
        output += '\n<td><a href="' + json[packageName].repository + '" target="_blank">' + json[packageName].repository + '</a></td>\n</tr>';
      });

      output += '\n</table></body></html>';


      grunt.file.write(options.target, output);

      grunt.log.writeln('File ' + options.target + ' created.');


      done();
    });
  });
};
