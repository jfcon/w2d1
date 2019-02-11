function getAndPrintHTML() {


    //eastablishes which domain and path we're requesting
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };
    // creates a character limit to the incoming data
    // var buf = new ArrayBuffer(255);

    // requires https object (built-in to the system)
    var https = require('https');
    var fs = require('fs');

    // called by https when the request is made
    function callback(response) {
        response.on('data', function (chunk) {
            var breaks = '';
            breaks += (chunk.toString());
            console.log(breaks);
        })
    }

    // marks the end of the file
    https.request(requestOptions, callback).end();
}

console.log(getAndPrintHTML());