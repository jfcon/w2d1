function getAndPrintHTML(options) {
    var https = require('https');

    var options = {};
    options.host = requestOptions.host;
    options.path = requestOptions.path;

    function callback(response) {
        var breaks = '';
        response.on('data', function (chunk) {
            breaks += (chunk.toString());
        })
        response.on('end', function () {
            console.log(breaks);
        });
    }
    // marks the end of the file
    https.request(options, callback).end();
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML())