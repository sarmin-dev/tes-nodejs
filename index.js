const http = require("http");
const PORT = 80;

http.createServer((req,res)=>{
  res.end("server live");
}).listen(PORT);
