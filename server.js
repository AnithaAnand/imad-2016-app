var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one' :{     title: 'Article One - Anitha Subhashini',
    heading: 'Article One',
    date: '19th Sep, 2016',
    content: `
            <p>
                    This is my first article content page. It serves the first article for the month. Starts from September 19th 2016.
                    Continues for two more week. All topics related to the article are specified here.
                </p>
            <p>
                    This also serves the complete package of the first article of the month. More practical modules will be discussed in coming weeks. Lets explore the horizon.
                </p`},
    'article-two' :{  title: 'Article Two - Anitha Subhashini',
    heading: 'Article Two',
    date: '20th Sep, 2016',
    content: `
            <p>
                    This is my second article content page. It serves the second article for the month. Starts from September 20th 2016.
                 All topics related to the article are specified here.
                </p>
            <p>
                    This also serves the complete package of the second article of the month. More practical modules will be discussed in coming weeks.
                </p`
},
    'article-three': {  title: 'Article Three - Anitha Subhashini',
    heading: 'Article Three',
    date: '21st Sep, 2016',
    content: `
            <p>
                    This is my third article content page. It serves the third article for the month. Starts from September 21st 2016.
                    Continues for two more week. All topics related to the article are specified here.
                </p>
            <p>
                    This also serves the complete package of the 3rd article of the month.
                </p`
},
};
  

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
              ${date}
            </div>
        <div>
        ${content}
        </div>
        </div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function (req,res){
    counter = counter + 1;
    res.send(counter.toString())
});


app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
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

var names =[];
app.get('/submit-name', function(req, res){
   //Get the name from the request
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
