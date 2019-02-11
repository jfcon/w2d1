function getAndPrintHTMLChunks() {

    // requires https object (built-in to the system)
    var https = require('https');

    //eastablishes which domain and path we're requesting
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    // called by https when the request is made
    function callback(response) {
            response.on('data', function(chunk){
                console.log(chunk.toString());
            })
        
    }
    https.request(requestOptions, callback).end();
}

console.log(getAndPrintHTMLChunks());