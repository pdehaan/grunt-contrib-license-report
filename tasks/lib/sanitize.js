function parseLicense (licenseString, packageName, grunt) {


    if(licenseString == 'UNKNOWN')
    {
        // TODO :
        // Implement warninge
        grunt.log.warn('UNKNOWN LICENSE for ' + packageName);
        return 'UNKNOWN';
    }
    else
    {
        var parts = licenseString.match(/^([A-Z]+).*/);

        if (parts) {

            return '<a href="http://en.wikipedia.org/wiki/' + parts[1] + '_license" target="_blank">' + licenseString + '</a>';
        }

        return "Error";
    }

}

module.exports = parseLicense;