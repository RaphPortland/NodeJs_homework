var url = require('url')
const qs = require('querystring')


module.exports = {

	handleRequest : function(request, response){
		response.writeHead(200, {'Content-Type' : 'text/html'})

		var route = url.parse(request.url)
		var path = route.pathname; 

		switch(path){
			case '/':
				response.write("<h1> Tp1 :  </h1><p> / explains how /hello works <br>/hello takes a name query parameter and random names replies hello [name] your own name replies with a short intro of yourself any other replies a 404 code with a not found message</p>")
				response.end()
				break;
			case '/hello':
				var params = qs.parse(route.query)
  				console.log(params)
  				console.log(params['name'])
  				if(params['name'] == "RaphaelPartouche"){
  					response.write("<h1> Hello  " + params['name']+  "</h1> <p> A bio of myself </p>")
  				} else {
  					response.write("<h1> Hello " + params['name']+  "</h1>")
  				}
				response.end()
				break;
			default:
				response.writeHead(404)
				response.write("404 not found")
				response.end()
				break;

		}

	}


};