var express = require('express');
var app = express();

var fs = require('fs');
var path = require('path');

var template = require('./lib/template.js');
var templateWorklist = template.worklist;
var templateArchive = template.archive;
var templateList_work = template.list_work;
var templateList_archive = template.list_archive;
var templateList_img = template.list_img;
var port = 3000;

app.use(express.static('lib'));

app.get('/works', function(req, res, next){
  fs.readdir('./lib/works', function(err, filelist){
    req.worklist = filelist;
    next();
  });
});

app.get('/archive',function(req,res,next){
  fs.readdir('./lib/archive',function(err,filelist){
    req.archivelist = filelist;
    next();
  });
});

app.get('/works/:workId',function(req,res,next){
var title = path.parse(req.params.workId).base;
  fs.readdir(`./lib/works/${title}/img`,function(err,filelist){
    var title = path.parse(req.params.workId).base;
    req.imglist = filelist;
    next();
  });
});


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/works', function(req,res){
    var title = 'works';
    var description = 'Hello, this is WORKLIST page';
    var list = templateList_work(req.worklist);
    var template = templateWorklist(title,description,list);
    res.send(template);

});

app.get('/works/:workId',function(req,res){
  var title = path.parse(req.params.workId).base;
  fs.readFile(`./lib/works/${title}/description`,function(err,description){
    fs.readdir(`./lib/works/${title}/img`,function(err,filelist){

    var list;
    var i = 1;
    while(i < filelist.length){
      list = list + `<img src = "http://localhost:3000/works/${title}/img/img${i}.jpg" width = "30%">`;
      i = i + 1;
    }
  var template =
    `<!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="/css/inlist.css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates|Prompt:300&display=swap" rel="stylesheet">
    </head>
    <body>
    <div class = "grad"></div>
    <div class = "fixed">
      <div class = "col3-1">
        <span id = "darkmode"><img src="https://img.icons8.com/ios-filled/50/000000/waning-crescent.png"/ width = "25px" height = "25px"></span>
      </div>
      <div class = "col2-1">
        <a href="/works">works</a>
      </div>
      <div class = "col1">
        <a href="/information">THinK is delightful!</a>
      </div>
      <div class = "col2-2">
        <a href = "/archive" >archive</a>
      </div>
      <div class = "col3-2">
        <a href = "https://vsco.co/greentarte/gallery" class = "social"><img src="https://img.icons8.com/ios/50/000000/vsco-logo.png"/ width = "25px" height = "25px"></a>
      </div>
    </div>
    <div id = "inworklist">
      <h2>${title}</h2>
      <p>${description}</p>
      ${list}
    </div>
      </body>
      </html> `;
      res.send(template);
      });
    });
});
app.get('/archive', function(req,res){
    var title = 'archive';
    var list = templateList_archive(req.archivelist);
    var template = templateArchive(title,list);
    res.send(template);
});
app.get('/archive/:archiveId',function(req,res){
  var title = path.parse(req.params.archiveId).base;
  fs.readFile(`./lib/archive/${title}/description`,function(err,description){
  var template =
    `<!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="/css/inlist.css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates|Prompt:300&display=swap" rel="stylesheet">
    </head>
    <body>
    <div class = "grad"></div>
    <div class = "fixed">
      <div class = "col3-1">
        <span id = "darkmode"><img src="https://img.icons8.com/ios-filled/50/000000/waning-crescent.png"/ width = "25px" height = "25px"></span>
      </div>
      <div class = "col2-1">
        <a href="/works">works</a>
      </div>
      <div class = "col1">
        <a href="/information">THinK is delightful!</a>
      </div>
      <div class = "col2-2">
        <a href = "/archive" >archive</a>
      </div>
      <div class = "col3-2">
        <a href = "https://vsco.co/greentarte/gallery" class = "social"><img src="https://img.icons8.com/ios/50/000000/vsco-logo.png"/ width = "25px" height = "25px"></a>
      </div>
    </div>
        <h2>${title}</h2>

      </body>
      </html> `;
      res.send(template);
    });
});
app.get('/information',function(req,res){
  var name = "Taehyeon Kim";
  fs.readFile('./lib/information/brief',function(err,brief){
    fs.readFile('./lib/information/timeline',function(err,timeline){
      var template =
      `<!doctype html>
      <html>
        <head>
          <title>THK - ${name}</title>
          <meta charset="utf-8">
          <link rel="stylesheet" href="/css/information.css">
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates|Prompt:300&display=swap" rel="stylesheet">
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        </head>
        <body>
        <div class = "grad"></div>
        <div class = "fixed">
        <div class = "col3-1">
          <span id = "darkmode"><img src="https://img.icons8.com/ios-filled/50/000000/waning-crescent.png"/ width = "25px" height = "25px"></span>
        </div>
        <div class = "col2-1">
          <a href="/works">works</a>
        </div>
        <div class = "col1">
          <a href="/information">THinK is delightful!</a>
        </div>
        <div class = "col2-2">
          <a href = "/archive" >archive</a>
        </div>
        <div class = "col3-2">
          <a href = "https://vsco.co/greentarte/gallery" class = "social"><img src="https://img.icons8.com/ios/50/000000/vsco-logo.png"/ width = "25px" height = "25px"></a>
        </div>
        </div>
        <div id = "information">
            <h2>${name}</h2>
            <p class = "brief">${brief}</p>
            <p class = "timeline">${timeline}</p>

        </div>
        </body>
      </html>`;
      res.send(template);
    });
  });

});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



/*
var http = require('http');

var url = require('url');
// var qs = require('querystring');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryworks = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){

    } else if(pathname === '/works'){ //worklist
      fs.readdir('./works',function(err, filelist){

        if(queryworks.id === undefined){

      } else { //inside the works list
        fs.readdir(`./works`,function(err,imglist){
          fs.readFile(`./works/${queryworks.id}/description`,'utf8', function(err,description){
            fs.readdir(`./works/${queryworks.id}/img`,function(err,imglist){

              var htmlimg =``;
              imglist.forEach(function(inlist){
                htmlimg = htmlimg + `<img src = "./works/${queryworks.id}/img/${inlist}">`
              });
              var nodeimg = [];
              imglist.forEach(function(inlist){
                fs.readFile(`./works/${queryworks.id}/img/${inlist}`,function(err,l){
                  nodeimg.push(l);
                });
              });




            });
          });
        });

      }
      });

    } else if(pathname === '/information'){

    }
    else if(pathname === '/archive'){

    }
    else {
      response.writeHead(404);
      response.end('Page Not found');
    }
});
// app.use(express.static('css'));
app.listen(2000);*/
