// Make Express Server
var express = require("express");
var app = express();

// General Express Stuff
var path = require('path');
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use('/public', express.static('public'));

// Express Routes
app.get('/', function (req, res) {
    // Web Scraping dependencies
    var cheerio = require('cheerio');
    var request = require('request');

    // Get a random poem from poetry.net
    request("http://poetry.net", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // Get poem text
        var $ = cheerio.load(body);
        var poem = $('#disp-quote-body').text();

        // Get poem title and author
        var title = $('#disp-poem-title a').text();
        var author = $('#disp-quote-author-meta p.author').text();

        // Pass information to the Jade template
        var words = poem.split(" ");
        res.render('create', {
          "title": title,
          "author": author,
          "words": words
        });
      }
    });
});

// Route to vote for specific post
app.get('/post/:id', function(req, res) {
  var id = req.params.id;

  res.sendFile(path.join(__dirname + '/posts/' + id + '.html'));
});

// Start the server
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
