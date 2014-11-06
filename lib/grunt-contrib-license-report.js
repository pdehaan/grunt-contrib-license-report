var checker = require('license-checker');
var fs = require('fs');

checker.init({
    start: './'
}, function(json) {

    var output = '<!DOCTYPE html><html><head><title>License report</title>' +
        '<style type="text/css">' +
        'html, body {' +
        'background-color: #FFFFFF;' +
        'color: #333333' +
        'padding: 0:' +
        'margin: 0;' +
        '}' +
        'table th, td {' +
        'text-align: left;' +
        '}</style></head><body><table border="1"><tr><th>Project</th><th>License</th><th>Repository</th></tr>';


    var jsonObj = Object.getOwnPropertyNames(json);

    jsonObj.forEach(function(value) {

        output += '<tr><td>' + value + '</td>';

        output += '<td>' + json[value].licenses;

        output += '</td><td><a href="' + json[value].repository + '" target="_blank">' + json[value].repository + '</a></td></tr>';

    });


    output += '</table></body></html>';

    fs.writeFile('licenses.html', output);
});