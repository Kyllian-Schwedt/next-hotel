export default function BookingForm2() {
	return (
		<>
			<div id={"booking-2"}>
				<h5 className={"text-center"}>Attribution des chambres</h5>

				<p>Il est nécessaire de compléter les informations ci-dessous afin que nous vous attribuons vos chambres.</p>
				<p>Pour chacune, vous devez nommé un adulte responsable pour cette période.</p>


				<b>Chambre 1</b>
				<div className={"row"}>
					<div className={"row"}>
						<div className={"mb-3 col"}>
							<label htmlFor="">Votre prénom *:</label>
							<input type="text" className="form-control" placeholder="Votre prénom" required={true}/>
						</div>
						<div className={"mb-3 col"}>
							<label htmlFor="">Votre nom *:</label>
							<input type="phone" className="form-control" placeholder="Votre nom" required={true}/>
						</div>
					</div>
				</div>

				<b>Chambre 2</b>
				<div className={"row"}>
					<div className={"row"}>
						<div className={"mb-3 col"}>
							<label htmlFor="">Votre prénom *:</label>
							<input type="text" className="form-control" placeholder="Votre prénom" required={true}/>
						</div>
						<div className={"mb-3 col"}>
							<label htmlFor="">Votre nom *:</label>
							<input type="phone" className="form-control" placeholder="Votre nom" required={true}/>
						</div>
					</div>
				</div>

				<div className={"row mt-4 mb-4"}>
					<div className={"col"}>
						<a className={"btn btn-secondary"} href={"booking-1"}>Retour</a>
					</div>
					<div className={"col"}>
						<button className={"btn btn-outline-info"}>Partager</button>
					</div>

					<div className={"col"}>
						<a className={"btn btn-primary"} href={"booking-3"}>Suivant</a>
					</div>
				</div>
			</div>
		</>
	)
}