console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.mrginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval =setInterval(moveRight, 50);
    
};