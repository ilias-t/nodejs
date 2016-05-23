const http = require('http');
// defines some port to listen to
const PORT=8080;

// handles requests coming in and sends a response to each
function handleRequests(request, response){
    response.end("<h1>It's alive!</h1>");
}

// create a server
var server = http.createServer(handleRequests);

// start the server
server.listen(PORT, function(){
    console.log("listening on port", PORT); // this code is run when the server starts
});
