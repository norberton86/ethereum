'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new') //add(url pattern,file to load)
.add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNDLEFBREQsSUFDSyxBQURMLGtCQUNzQixBQUR0QixrQkFDNEMsQUFENUM7Q0FFQyxBQUZELElBRUssQUFGTCx1QkFFMkIsQUFGM0IsbUJBR0MsQUFIRCxJQUdLLEFBSEwsZ0NBR29DLEFBSHBDLDZCQUlDLEFBSkQsSUFJSyxBQUpMLG9DQUl3QyxBQUp4Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYy1ubG9wZXotb3N4L2tpY2tTdGFydCJ9