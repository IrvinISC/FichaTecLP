const container = document.getElementById('container');
var b = 1;
function uno(){
	b = 1;
	container.classList.remove("right-panel-active-3");
	container.classList.remove("right-panel-active-2");
	container.classList.remove("right-panel-active-1");
	window.scrollTo(0, 0);
}
function dos(){
	b = 2;
	container.classList.remove("right-panel-active-3");
	container.classList.remove("right-panel-active-2");
	container.classList.add("right-panel-active-1");
	window.scrollTo(0, 0);
}
function tres(){
	 b = 3;
	container.classList.remove("right-panel-active-3");
	container.classList.add("right-panel-active-2");
	window.scrollTo(0, 0);
}
function cuatro(){
	b = 4;
	container.classList.add("right-panel-active-3");
	window.scrollTo(0, 0);
}
function siguiente(){
	if(b == 1){
		dos();
	}else if(b == 2){
		tres();
	}else if(b == 3){
		cuatro();
	}else{
		uno();
	}
	window.scrollTo(0, 0);
}
function anterior(){
	if(b == 4){
		tres();
	}else if(b == 3){
		dos();
	}else if(b == 2){
		uno();
	}else{
		cuatro();
	}
	window.scrollTo(0, 0);
}