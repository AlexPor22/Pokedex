const navbar = document.querySelector('.nav');
const search = document.querySelector('.header__search');
const itemOne = document.querySelector('.nav__li--one');
const itemTwo = document.querySelector('.nav__li--two');
const boxes = document.querySelector('.boxes');
const header = document.querySelector('.header__search--pokemon');
const mobile = document.querySelector('.mobile');

const activeOpctions = () => {
	navbar.addEventListener('click', (e) => {
		const btn = e.target.closest('button');
		const link = e.target.closest('a');

		if (btn?.dataset?.accion === 'menu') {
			mobile.classList.remove('mobile--disabled');
		}

		// !Activamos el buscador
		if (link?.dataset?.accion === 'home') {
			e.preventDefault();
			search.classList.add('header--active');
			itemOne.classList.add('nav__li--active');
			itemTwo.classList.remove('nav__li--active');
			boxes.classList.remove('boxes--active');
			header.classList.add('header__search--pokemon--active');
		}

		// !Activamos la pokedex
		if (link?.dataset?.accion === 'pokedex') {
			e.preventDefault();
			search.classList.remove('header--active');
			itemOne.classList.remove('nav__li--active');
			itemTwo.classList.add('nav__li--active');
			boxes.classList.add('boxes--active');
			header.classList.remove('header__search--pokemon--active');
		}
	});
};

const mobileActive = () => {
	mobile.addEventListener('click', function (e) {
		const btn = e.target.closest('button');
		const link = e.target.closest('a');

		if (btn?.dataset?.accion === 'close') {
			mobile.classList.add('mobile--disabled');
		}

		// !Activamos el buscador
		if (link?.dataset?.accion === 'home') {
			e.preventDefault();
			search.classList.add('header--active');
			itemOne.classList.add('nav__li--active');
			itemTwo.classList.remove('nav__li--active');
			boxes.classList.remove('boxes--active');
			header.classList.add('header__search--pokemon--active');
			mobile.classList.add('mobile--disabled');
		}

		// !Activamos la pokedex
		if (link?.dataset?.accion === 'pokedex') {
			e.preventDefault();
			search.classList.remove('header--active');
			itemOne.classList.remove('nav__li--active');
			itemTwo.classList.add('nav__li--active');
			boxes.classList.add('boxes--active');
			header.classList.remove('header__search--pokemon--active');
			mobile.classList.add('mobile--disabled');
		}

		// !Salimos
		if (link?.dataset?.accion === 'exit') {
			search.classList.remove('header--active');
			itemOne.classList.remove('nav__li--active');
			itemTwo.classList.add('nav__li--active');
			boxes.classList.add('boxes--active');
			header.classList.remove('header__search--pokemon--active');
			mobile.classList.add('mobile--disabled');
		}
	});
};

export { activeOpctions, mobileActive };
