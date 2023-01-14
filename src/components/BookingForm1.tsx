import {MouseEvent} from "react";

export default function BookingForm1() {
	return (
		<>
			<div className={"flex flex-column"} id={"booking-1"}>
				<h5 className={"text-center mb-2"}>Chambres disponibles</h5>
				<div className={"row border-bottom border-top mb-2"}>
					<div className={"col-3"}>
						<img src={"./images_chambres/white-bed-comforter-during-daytimne-90317.jpg"} alt={"Ceci est" +
							" une image"} className={"pic"}></img>
					</div>
					<div className={"col-9"}>
						<h6>Chambre double</h6>
						<p>La plus belle vue de la région de Toulon vous attends pour passer de merveilleuses nuits.</p>
						<u>Options disponibles</u>
						<div className={"row"}>
							<ul className={"col"}>
								<li><b>Petit-déjeuner</b></li>
								<li><b>Non-remboursable</b></li>
							</ul>
							<div className={"col"}>
								<button type={"button"} className={"btn btn-primary"} id={"option1"} onClick={openInfos}>+</button>
							</div>
						</div>
					</div>
				</div>

				<div className={"row border-bottom mb-2"}>
					<div className={"col-3"}>
						<img src={"./images_chambres/hotel-room-1447201_1920.jpg"} alt={"Ceci est" +
							" une image"} className={"pic"}></img>
					</div>
					<div className={"col-9"}>
						<h6>Chambre triple</h6>
						<p>La plus belle vue de la région de Toulon vous attends pour passer de merveilleuses nuits.</p>
						<u>Options disponibles</u>
						<div className={"row"}>
							<ul className={"col"}>
								<li><b>Petit-déjeuner</b></li>
								<li><b>Non-remboursable</b></li>
							</ul>
							<div className={"col"}>
								<button type={"button"} className={"btn btn-primary"} id={"option1"} onClick={openInfos}>+</button>
							</div>
						</div>
					</div>
				</div>

				<div className={"row border-bottom mb-2"}>
					<div className={"col-3"}>
						<img src={"./images_chambres/Meero-photo-85047785-014.jpg"} alt={"Ceci est" +
							" une image"} className={"pic"}></img>
					</div>
					<div className={"col-9"}>
						<h6>Chambre Quadruple</h6>
						<p>La plus belle vue de la région de Toulon vous attends pour passer de merveilleuses nuits.</p>
						<u>Options disponibles</u>
						<div className={"row"}>
							<ul className={"col"}>
								<li><b>Petit-déjeuner</b></li>
								<li><b>Non-remboursable</b></li>
							</ul>
							<div className={"col"}>
								<button type={"button"} className={"btn btn-primary"} id={"option1"} onClick={openInfos}>+</button>
							</div>
						</div>
					</div>
				</div>

				<div className={"infos not-display"} id={"option1-infos"}>
					<div className={"row border-bottom"}>
						<div className={"col"}>
							<b>Option 1</b>
							<p>Cette option comprend uniquement le petit-déjeuner.</p>
						</div>
						<div className={"col"}>
							<button type={"button"} className={"btn btn-primary"}>15 €</button>
						</div>
					</div>
				</div>

				<div className={"row mt-4 mb-4"}>
					<div className={"col"}>
					</div>
					<div className={"col"}>
						<button className={"btn btn-outline-info"}>Partager</button>
					</div>

					<div className={"col"}>
						<a className={"btn btn-primary"} href={"#booking-2"}>Suivant</a>
					</div>
				</div>
			</div>
		</>
	)
}

function openInfos(e: MouseEvent) {
	let id = e.target.getAttribute('id')
	let target = document.getElementById(id + "-infos").className
	console.log(target)
	target.
	target.add("display")
	console.log(target)
}