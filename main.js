const SigButton = document.getElementById('Siguiente');
const AntButton = document.getElementById('Anterior');
const container = document.getElementById('container');

SigButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

AntButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});