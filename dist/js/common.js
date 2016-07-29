
function output(item) {
	document.getElementsByClassName('img')[0].innerHTML = item;
}

var imgList = document.getElementsByClassName('small-img__item');
	for (var i = 0; i<imgList.length;i++) {
		imgList[i].addEventListener("click", function() {
			output(this.innerHTML)
	});
};

var acc = document.getElementsByClassName("item__name");
for (var i = 0; i < acc.length; i++) {
	acc[i].onclick = function(){
	 	this.classList.toggle("active");
	  this.nextElementSibling.classList.toggle("show");
	};
};

function changeCountry() {
  var x = document.getElementById("genre").value;
  document.getElementsByClassName("input__phone")[0].value = x;
}