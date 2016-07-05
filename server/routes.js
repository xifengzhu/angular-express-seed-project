// app/routes.js

// expose the routes to our app with module.exports
module.exports = function(app) {
  // load the api routes
  require('./api')(app);

  // application -------------------------------------------------------------
  app.get('/', function(req, res) {
    res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });

  // load templates
  app.get('/client/templates/:name', function(request, response) {
    var name = request.params.name;
    console.log("request templates name: "+ name);
    response.sendfile('./client/templates/' + name);
  });

};
