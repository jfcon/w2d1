module.exports = function getHTML(options, callback) {
  function getHTML(options, callback) {
    var https = require("https");

    var options = {};
    options.host = requestOptions.host;
    options.path = requestOptions.path;

    function callback(response) {
      var breaks = "";
      response.on("data", function(chunk) {
        breaks += chunk.toString();
      });
      response.on("end", function() {
        printHTML(breaks);
      });
    }
    // marks the end of the file
    https.request(options, callback).end();
  }

  function printHTML(html) {
    console.log(html);
  }

  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step4.html"
  };

  getHTML();
};
