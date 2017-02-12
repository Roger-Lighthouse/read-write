var https = require('https');

//console.log('I did it!');

var options = {
  //host: 'office.whiteshark.ca',
  //path: '/'
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  //console.log('Response: ', response);

  response.on('data', function(chunk) {
  console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
 // console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");




/*
QUESTIONS:
1) Order of execution
2) Where did response come from in callback function
3) chunk??


*/