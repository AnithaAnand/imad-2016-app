var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool;

var config = {
    user: 'anithaanand',
    database: 'anithaanand',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

function createTemplate (data){
   var title = data.title;
   var date = data.date;
   var heading = data.heading;
   var content = data.content;
   var htmlTemplate = `
<html>
<head>
    <title>
        ${title}
    </title>
   <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
              ${date.toDateSting()}
            </div>
        <div>
        ${content}
        </div>
       </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new pool(config);
app.get('/test-db', function (req, res){
    //make a select request
    //return a response with the results
    pool.query('SELECT * FROM test', function(err, result) {
        if (err) {
            err.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result.rows));
        }
    });
});

var counter = 0;
app.get('/counter',function (req,res){
    counter = counter + 1;
    res.send(counter.toString());
});
var names =[];
app.get('/submit-name', function(req, res){
   //Get the name from the request
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

var comms =[];
app.get('/comment-list', function(req, res){
   //Get the name from the request
   var comment = req.query.comment;
   comms.push(comment);
   res.send(JSON.stringify(comms));
});


app.get('/articles/:articleName', function (req, res){
    var articleName = req.params.articleName;
    pool.query("SELECT * FROM article WHERE title= $1", + [req.params.articleName], function (err, result){
      if (err) {
          err.status(500).send(err.toString());
      } else {
          if (result.length.rows ===0) {
              res.status(404).send("Article not found");
          } else {
              var articleData = result.rows[0];
           res.send(createTemplate(articleData));   
          }
          }
      });
    });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
