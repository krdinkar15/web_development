const http=require("http");
const fs=require("fs");
const port=3000;
const hostName="127.0.0.1";
const home=fs.readFileSync("index.html");
const about=fs.readFileSync("about.html");
const services=fs.readFileSync("services.html");
const contacts=fs.readFileSync("contacts.html");
const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    if(url=="/"||url=="/index.html")
      res.end(home);
    else if(url=="/about.html")
        res.end(about);
    else if(url=="/services.html")
        res.end(services);
    else if(url=="/contacts.html")
        res.end(contacts);
    else 
        {
            res.statusCode=404;
            res.end('<h1>Sorry! Page Not Found');
        }  
});
server.listen(port,hostName,()=>{
    console.log("Server started at",port,"and url",hostName);
});