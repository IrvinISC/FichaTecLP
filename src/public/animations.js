const container = document.getElementById('container');
var b = 1;
function uno(){
	b = 1;
	container.classList.remove("right-panel-active-3");
	container.classList.remove("right-panel-active-2");
	container.classList.remove("right-panel-active-1");
}
function dos(){
	b = 2;
	container.classList.remove("right-panel-active-3");
	container.classList.remove("right-panel-active-2");
	container.classList.add("right-panel-active-1");
}
function tres(){
	 b = 3;
	container.classList.remove("right-panel-active-3");
	container.classList.add("right-panel-active-2");
}
function cuatro(){
	b = 4;
	container.classList.add("right-panel-active-3");
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
}