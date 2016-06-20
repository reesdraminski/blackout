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
  var story = "The daughter had just uttered some simple jest that filled them all with mirth, when the wind came through the Notch and seemed to pause before their cottage rattling the door, with a sound of wailing and lamentation, before it passed into the valley. For a moment it saddened them, though there was nothing unusual in the tones. But the family were glad again when they perceived that the latch was lifted by some traveller, whose footsteps had been unheard amid the dreary blast which heralded his approach, and wailed as he was entering, and went moaning away from the door.";
  var words = story.split(" ");

  res.render('create', {
    "words": words
  });
});

// Route to vote for specific position
app.get('/post/:id', function(req, res) {
  var id = req.params.id;

  res.sendFile(path.join(__dirname + '/posts/' + id + '.html'));
});

// Start the server
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
