template = {
  worklist:function(title,description,list){
    return `
    <!doctype html>
    <html>
    <head>
      <title>TortHolio - works</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="/css/worklist.css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates|Prompt:400&display=swap" rel="stylesheet">
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
        <div class = "worklist">
        ${list}
        </div>
        <script>
          $("#darkmode").click(function(){
              $("body").toggleClass("darkmode");
            });
          $("a").hover(function(){
              $(this).toggleClass("hover");
            });
          $("#darkmode").hover(function(){
              $(this).toggleClass("hover");
            });
        </script>
    </body>
    </html>
      `;
  },
  archive:function(title,body){
    return`
    <!doctype html>
    <html>
    <head>
      <title>TortHolio - ${title}</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="/css/worklist.css">
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
      <p>${body}</p>

      <script>
        $("#darkmode").click(function(){
            $("body").toggleClass("darkmode");
          });
        $("a").hover(function(){
            $(this).toggleClass("hover");
          });
      </script>
    </body>
    </html>
    `;
  },
  list_work:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/works/${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },
  list_archive:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/archive/${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },
  list_img:function(filelist){
    var list;
    var i = 0;
    while(i < filelist.length){
      list = list + `<img src = "http://localhost:3000/works/${title}/img/img${i}.jpg" width = "30%">`;
      i = i + 1;
    }

    return list;
  }
};
module.exports = template;
