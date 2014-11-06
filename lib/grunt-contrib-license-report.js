var checker = require('license-checker'),
    sanitize = require('./sanitize'),
    fs = require('fs'),
    project = require('../package.json');

checker.init({
    start: './'
}, function(json) {

    var output = '<!DOCTYPE html>\n<html><head><title>License report for '+project.name+' v'+project.version+'</title>\n' +
        '<style type="text/css">\n' +
        'html, body {\n' +
        'background-color: #FFFFFF;\n' +
        'color: #333333\n' +
        'padding: 0:\n' +
        'margin: 0;\n' +
        '}\n' +
        'table th, td {\n' +
        'text-align: left;\n' +
        '}</style>\n</head>\n<body>\n<h1>License report for '+project.name+' v'+project.version+'</h1>\n<table border="1">\n<tr>\n<th>Project</th><th>License</th><th>Repository</th>\n</tr>';

    var jsonObj = Object.getOwnPropertyNames(json);

    jsonObj.forEach(function(value) {

        output += '\n<tr>\n<td>' + value + '</td>';

        var link = 'http://en.wikipedia.org/wiki/' + sanitize(json[value].licenses) + '_license';

        output += '\n<td><a href="' + link + '" target="_blank">' + json[value].licenses + '</a></td>';
        output += '\n<td><a href="' + json[value].repository + '" target="_blank">' + json[value].repository + '</a></td>\n</tr>';
    });

    output += '\n</table></body></html>';

    fs.writeFile('licenses.html', output);
});