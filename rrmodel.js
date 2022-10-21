var http=require('http');
var fs=require('fs');

var server=http.createServer(function (req,res) {

    if(req.url==="/"){
        let mydata= fs.readFileSync('home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata)
        res.end();
    }
    else if(req.url==="/Service"){
        let mydata= fs.readFileSync('service.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata)
        res.end();
    }
    else if(req.url==="/Projects"){
        let mydata= fs.readFileSync('projects.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata)
        res.end();
    }
    else if(req.url==="/Protfolio"){
        let mydata= fs.readFileSync('protfolio.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata)
        res.end();
    }
    else if(req.url==="/Contact"){
        let mydata= fs.readFileSync('contact.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata)
        res.end();

    }
    else if(req.url==="/About"){
        let mydata= fs.readFileSync('about.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata)
        res.end();
    }


});
server.listen(4050);
console.log("Server Run Successfully Done!!");
