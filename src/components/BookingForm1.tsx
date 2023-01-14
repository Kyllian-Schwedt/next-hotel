import Image from "next/image";
import {MouseEvent} from "react";

export default function BookingForm1() {
	return (
		<>
			<div className={"flex flex-column"}>
				<div className={"row"}>
					<div className={"col-3"}>
						<Image src={""} alt={"Ceci est une image"}></Image>
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

				<div className={"infos not-display"} id={"option1-infos"}>
					<div className={"row border-bottom"}>
						<div className={"col"}>
							<b>Option 1</b>
							<p>Cette option comprend uniquement le petit-déjeuner.</p>
						</div>
						<div className={"col"}>
							<button type={"button"} className={"btn btn-primary"}>Prix €</button>
						</div>
					</div>
				</div>

				<div className={"row mt-4 mb-4"}>
					<div className={"col"}>
					</div>
					<div className={"col"}>
						<button className={"btn btn-danger"}>Partager</button>
					</div>

					<div className={"col"}>
						<button type={"submit"} className={"btn btn-primary"}>Suivant -></button>
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