function parseLicense (licenseString) {

    var parts = licenseString.match(/^([A-Z]+).*/);

    if (parts) {
        return parts[1];
    }

    return licenseString;
}

module.exports = parseLicense;