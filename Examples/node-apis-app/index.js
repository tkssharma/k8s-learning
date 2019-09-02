const http = require('http');
const server = http.createServer(function(req, res){
  res.write('<h1>Hello</h1>');
  res.end();
})
server.listen(3000, function(){
   console.log('server started...')
})



