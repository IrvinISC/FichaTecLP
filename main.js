const container = document.getElementById('container');
function uno(){
	container.classList.remove("right-panel-active-3");
	container.classList.remove("right-panel-active-2");
	container.classList.remove("right-panel-active-1");
}
function dos(){
	container.classList.remove("right-panel-active-3");
	container.classList.remove("right-panel-active-2");
	container.classList.add("right-panel-active-1");
}
function tres(){
	container.classList.remove("right-panel-active-3");
	container.classList.add("right-panel-active-2");
}
function cuatro(){
	container.classList.add("right-panel-active-3");
}