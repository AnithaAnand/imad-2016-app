var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne = {
    title: 'Article One - Anitha Subhashini',
    heading: 'Article One',
    date: '19th Sep, 2016',
    content: `
            <p>
                    This is my first article content page. It serves the first article for the month. Starts from September 19th 2016.
                    Continues for two more week. All topics related to the article are specified here.
                </p>
            <p>
                    This also serves the complete package of the first article of the month. More practical modules will be discussed in coming weeks. Lets explore the horizon.
                </p`
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
app.get('/article-one', function (req, res){
    res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
