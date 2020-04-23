function openSideBar() {
  var element = document.getElementById("mobile_drawer");
  element.classList.add("drawer_open");
}

function closeSideBar() {
  var element = document.getElementById("mobile_drawer");
  element.classList.remove("drawer_open");
}

window.addEventListener("load", function(){
	var loader = document.getElementById("preloader");
	loader.className += "hidden"; 
});