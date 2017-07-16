var moviesJSON = require('../movies.json');

// home
exports.home = function(req, res) {

  var movies = moviesJSON.movies;

  res.render('home', {
    title : 'Star Wars Movies',
    movies : movies
  });
};

// movie_single
exports.movie_single = function(req, res) {
  var episode_number = req.params.episode_number;
  res.send("<h2>This is the page for Episode " + episode_number + "</h2>");
};

// notFound
exports.notFound = function(req, res) {
  res.send("<h2>This is not the page you are looking for.</h2>");
};
