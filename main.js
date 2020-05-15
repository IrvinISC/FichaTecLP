const SigButton = document.getElementById('Siguiente');
const UnoButton = document.getElementById('Uno');
const DosButton = document.getElementById('Dos');
const TresButton = document.getElementById('Tres');
const AntButton = document.getElementById('Anterior');
const container = document.getElementById('container');

/*SigButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

AntButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});*/
function uno(){
	container.classList.remove("right-panel-active-2");
	container.classList.remove("right-panel-active-1");
}
function dos(){
	container.classList.remove("right-panel-active-2");
	container.classList.add("right-panel-active-1");
}
function tres(){
	container.classList.add("right-panel-active-2");
}