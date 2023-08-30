import background from './background';

export default function Pokemon(
	urlImagen,
	nombre,
	id,
	tipo,
	tipos,
	peso,
	altura,
	ps,
	ataque,
	defensa,
	ataqueEspecial,
	defensaEspecial,
	velocidad,
	movimientos,
	habilidades
) {
	return {
		urlImagen: urlImagen,
		nombre: nombre,
		id: id,
		tipo: tipo,
		tipos: tipos,
		peso: peso,
		altura: altura,
		ps: ps,
		ataque: ataque,
		defensa: defensa,
		ataqueEspecial: ataqueEspecial,
		defensaEspecial: defensaEspecial,
		velocidad: velocidad,
		movimientos: movimientos,
		habilidades: habilidades,
		obtenerDatos: function () {
			const typeSpans = this.tipos
				.map((type) => `<span class="box__type">${type}</span>`)
				.join('');

			const plantilla = `
                <div class="box" id="box" data-id="${
									this.id
								}" style="border: 4px solid ${background(
				this.tipo
			)}; box-shadow: 0 5px 20px ${background(this.tipo)};">
                    <div class="box__container" style="background-color: ${background(
											this.tipo
										)}; box-shadow: 0 5px 20px ${background(this.tipo)};">
                        <img src="${this.urlImagen}" alt="" class="box__img">
                    </div>
                    <span class="box__name--pokemon">${this.nombre}
					<br>
					N°. ${this.id}</span>
                    <div class="box__data--pokemon">
                        <div class="box__type--pokemon">
                            ${typeSpans}
                        </div>
                        <div class="box__data">
                            <div class="box__weight">
                                <i class="fas fa-arrows-up-down"></i>
                                ${this.altura}m
                            </div>
                            <div class="box__height">
                                <i class="fas fa-weight-hanging"></i>
                                ${this.peso}Kg
                            </div>
                        </div>
                    </div>
                </div>`;
			return plantilla;
		},
		cargarDatos: function () {
			const data = document.querySelector('.data__content');

			const moves = this.movimientos
				.map((move) => `<span class="data__move" style="background-color: ${background(this.tipo)}; box-shadow: 0 0 10px ${background(this.tipo)};">${move}</span>`)
				.join('');

			const abilities = this.habilidades
				.map((ability) => `<span class="data__move" style="background-color: ${background(this.tipo)}; box-shadow: 0 0 10px ${background(this.tipo)};">${ability}</span>`)
				.join('');

			data.style.background = background(this.tipo);
			let SumaTotal =
				this.ps +
				this.ataque +
				this.defensa +
				this.ataqueEspecial +
				this.defensaEspecial +
				this.velocidad;

			const plantilla = `
					<div class="data__card">
						<div class="data__container">
							<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.id}.gif"
								alt="" class="data__img--pokemon">
						</div>

						<div class="data__pokemon">
                        <h1 class="data__name">${this.nombre}</h1>

                        <div class="data__container--btn">
                            <button class="data__btn btn--abilities" data-accion="abilities" style="background-color: ${background(this.tipo)}; box-shadow: 0 0 10px ${background(this.tipo)};">Abilities</button>
                            <button class="data__btn btn--stats" data-accion="stats" style="background-color: ${background(this.tipo)}; box-shadow: 0 0 10px ${background(this.tipo)};">Stast</button>
                            <button class="data__btn btn--moves" data-accion="moves" style="background-color: ${background(this.tipo)}; box-shadow: 0 0 10px ${background(this.tipo)};">Moves</button>
                        </div>

                        <div class="data__abilities">
						${abilities}
						</div>

                        <div class="data__stats data--disabled">
                            <span class="data__stats--title">Estadisticas base</span>

                            <div class="data__content--stast">
                                <div class="data__container--stats">
                                    <span class="data__container--span">Ps</span>
                                    <span class="data__container--span">Ataque</span>
                                    <span class="data__container--span">Defensa</span>
                                    <span class="data__container--span">Velocidad</span>
                                    <span class="data__container--span">At. Especial</span>
                                    <span class="data__container--span">Def. Especial</span>
                                    <span class="data__container--span">Suma Total</span>
                                </div>

                                <div class="data__container--stats">
									<span class="data__container--number">${this.ps}</span>
									<span class="data__container--number">${this.ataque}</span>
									<span class="data__container--number">${this.defensa}</span>
									<span class="data__container--number">${this.ataqueEspecial}</span>
									<span class="data__container--number">${this.defensaEspecial}</span>
									<span class="data__container--number">${this.velocidad}</span>
									<span class="data__container--number">${SumaTotal}</span>
                                </div>

                                <div class="data__container--stats">
									<progress class="data__progress" value="${this.ps}" max="200"></progress>
									<progress class="data__progress" value="${this.ataque}" max="200"></progress>
									<progress class="data__progress" value="${this.defensa}" max="200"></progress>
									<progress class="data__progress" value="${this.ataqueEspecial}" max="200"></progress>
									<progress class="data__progress" value="${this.defensaEspecial}" max="200"></progress>
									<progress class="data__progress" value="${this.velocidad}" max="500"></progress>
									<progress class="data__progress" value="${SumaTotal}" max="1000"></progress>
                                </div>
                            </div>
                        </div>

                        <div class="data__moves data--disabled">${moves}</div>
                    </div>
					</div>

					<button class="data__close" data-accion="close">
						<img src="Img/pokemon_moltres_icon-icons.com_67518.png" alt="">
					</button>`;

			return plantilla;
		},
	};
}
