var looper;
var degrees = 0;
function rotateAnimation(element,speed){
	var object = document.getElementById(element);
	object.style.WebkitTransform = "rotate("+degrees+"deg)";
	looper = setTimeout('rotateAnimation(\''+element+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
}

function disappearingLetter1()
{
    setTimeout(function(){
      document.getElementById("dot1").style.display = "none";
    }, 3500);
}

function disappearingLetter2()
{
    setTimeout(function(){
      document.getElementById("dot2").style.display = "none";
    }, 2500);
}

function disappearingLetter3()
{
    setTimeout(function(){
      document.getElementById("dot3").style.display = "none";
    }, 1500);
}

function appearingLetters() {
  setTimeout(function(){
    document.getElementById("dot1").style.display = "block";
  }, 4500);
  setTimeout(function(){
    document.getElementById("dot2").style.display = "block";
  }, 4500);
  setTimeout(function(){
    document.getElementById("dot3").style.display = "block";
  }, 4500);
}

function Redirect()
{
		setTimeout(function(){
			window.location="mainPage.html";
		}, 5500);
}
