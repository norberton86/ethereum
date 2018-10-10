const routes = require('next-routes')()

routes
.add('/campaigns/new','/campaigns/new')     //add(url pattern,file to load)
.add('/campaigns/:address','/campaigns/show');

module.exports = routes
