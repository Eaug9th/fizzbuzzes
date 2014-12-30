//$(document).ready(function(){
var f="fizz!", b="BUZZ!", fb="FizzBuzz!";

  function theFunction(){
    var z=document.getElementById("maxNum").value;
    var x =3; var y = 5;

    z=Math.round(z);


    for (var i=1; i<z+1; i++){
      
      if(i%(x*y)==0){
        $('<div></div>').appendTo("#fb").html('<p>' + fb + '</p>');
    
      }else if(i%y==0){
        $('<div></div>').appendTo("#fb").html('<p>' + f + '</p>');
    
      }else if (i%x==0){
        $('<div></div>').appendTo("#fb").html('<p>' + b + '</p>');
    
      }else {
    
        $('<div></div>').appendTo("#fb").html('<p>' + i + '</p>');
      }
    }
  }
