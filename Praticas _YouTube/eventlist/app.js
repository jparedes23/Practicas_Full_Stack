const lista = document.getElementById('lista');
const btnAgregar = document.getElementById('btn-agregar');

lista.addEventListener('click',(e) => {
    if (e.target && e.target.tagName ==='A') {
        console.log(e.target.tagName)
        e.target.classList.toggle('activo')
    }
});

btnAgregar.addEventListener('click', () => {
	const elemento = `
		<a href="#">
			Elemento <i class="bi bi-check-square-fill"></i>
		</a>
	`;

	lista.innerHTML += elemento;
});