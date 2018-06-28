function random(n){
	return Number(Math.floor((Math.random() * n)));
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var reset = document.getElementById("reset");
reset.addEventListener("click",function(){
	var color = getRandomColor();
	document.getElementById("mainDiv").style.backgroundColor = color;
	document.getElementById("code").textContent  = String(color);

});
