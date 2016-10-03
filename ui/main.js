//counter code
var button = document.getElementById('counter');

button.onclick = function (){
    
  // Create a request object
 var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
     if (request.readyState === XMLHttpRequest.DONE) {
         //take some action 
        if (request.status === 200){
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
     }
     //not done yet
  }
  };
  //make the request
  request.open('GET', 'http://anithaanand.imad.hasura-app.io/counter', true);
  request.send(null);
  };
  
  //submit
  
  var submit = document.getElementById('submit_btn');
  submit.onclick = function(){
 
 //Make a request to the server and send the name
  
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
     if (request.readyState === XMLHttpRequest.DONE) {
         //take some action 
        if (request.status === 200){
          var names =request.responseText;
          names = JSON.parse(names);
          var list ='';
          for (var i=0; i<names.length; i++){
          list += '<li>' + names[i] + '</li>';
        }
         var ul = document.getElementById('namelist');
         ul.innerHTML = list;  
        
     }
  }
  };
  
  //make the request
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  request.open('GET', 'http://anithaanand.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
   };
   
   var comment =document.getElementById('comment_btn');
   comment.onclick=function(){
   
    var request_home= new XMLHttpRequest();
    request_home.onreadystatechange = function(){
      if (request_home.readyState ===XMLHttpRequest.DONE){
           if (request_home.status ===200){
              var com =request.responseText;
              com = JSON.parse(com);
               var comms ='';
            for (var j=0; j<com.length; j++){
                    comms += '<li>' + comms[j] + '</li>';
        }
                var ul = document.getElementById('commentlist');
                ul.innerHTML = comms;
                
            }
       }
    
    };
 var commentInput = document.getElementById('comment');
 var comments = commentInput.value;
 request.open('GET', 'http://anithaanand.imad.hasura-app.io/comment-list?comment=' + comment, true);
  request.send(null);
  };
  