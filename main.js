$(document).ready(function(){
var f="fizz!", b="BUZZ!", fb="FizzBuzz!";
for (var i=1; i<101; i++){
  if(i%(3*5)==0){
    $('<div></div>').appendTo("#fb").html('<p>' + fb + '</p>');
    //console.log(fb);
  }else if(i%3==0){
    $('<div></div>').appendTo("#fb").html('<p>' + f + '</p>');
    //console.log(f);
  }else if (i%5==0){
    $('<div></div>').appendTo("#fb").html('<p>' + b + '</p>');
    //console.log(b);
  }else {
    //console.log(i);
   $('<div></div>').appendTo("#fb").html('<p>' + i + '</p>');
  }
}
});
