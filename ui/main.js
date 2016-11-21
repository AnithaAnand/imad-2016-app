//counter code
//var button = document.getElementById('counter');

//button.onclick = function (){
    
  // Create a request object
 //var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  //request.onreadystatechange = function(){
    // if (request.readyState === XMLHttpRequest.DONE) {
         //take some action 
      //  if (request.status === 200){
        // var counter = request.responseText;
         //var span = document.getElementById('count');
        // span.innerHTML = counter.toString();
     }
     //not done yet
  }
  };
  //make the request
  //request.open('GET', 'http://anithaanand.imad.hasura-app.io/counter', true);
  //request.send(null);
  //};
  
  //submit username/password to login
  
  var submit = document.getElementById('submit_btn');
  submit.onclick = function(){
 
 //Make a request to the server and send the name
  
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
     if (request.readyState === XMLHttpRequest.DONE) {
         //take some action 
        if (request.status === 200){
            console.log("user logged in");
            alert("logged in sucessfully");
        } else if (request.status ===403) {
            alert("username/password incorrect");
        } else if (request.status ===500) {
            alert("Something went wrong on server");
        }
        }
     }
  }
  };
  
  //make the request
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username);
  console.log(password);
  request.open('POST', 'http://anithaanand.imad.hasura-app.io/login', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({username: username, password: password}));
   };
   


  /* var comments =document.getElementById('comment_btn');
   comments.onclick=function(){
   
    var request_home= new XMLHttpRequest();
    request_home.onreadystatechange = function(){
      if (request_home.readyState ===XMLHttpRequest.DONE){
           if (request_home.status ===200){
              var comms =request_home.responseText;
              comms = JSON.parse(comms);
               var comm_list ='';
            for (var j=0; j<comms.length; j++){
                    comm_list += '<li>' + comms[j] + '</li>';
        }
                var ol = document.getElementById('commentlist');
                ol.innerHTML = comm_list;
                
            }
       }
    
    };
 var commentInput = document.getElementById('comment');
 var comment = commentInput.value;
 request.open('GET', 'http://anithaanand.imad.hasura-app.io/comment-list?comment=' + comment, true);
  request.send(null);
  };*/
  