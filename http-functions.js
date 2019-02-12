module.exports = function getHTML(requestOptions, callback) {
  var https = require("https");

  var options = {};
  options.host = requestOptions.host;
  options.path = requestOptions.path;
  //   console.log(requestOptions);

  var buffer = "";
  https
    .request(options, function(response) {
      response.on("data", function(chunk) {
        buffer += chunk;
      });
      response.on("end", function() {
        callback(buffer);
      });
    })
    .end();
};
