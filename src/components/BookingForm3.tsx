export default function BookingForm3() {
	return (
		<>
			<div className={"booking-3"}>
				<div className={"d-flex flex-column text-center m-auto align-items-center"}>
					<form method={"POST"}>
						<div className={"flex flex-row mt-4"}>
							<h5>Informations d'identité</h5>
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
						<div className={"flex flex-row mt-2"}>
							<h5>Infos d'adresses</h5>
							<div className="mb-3">
								<label>Votre adresse (ligne 1) *:</label>
								<input type="text" className="form-control" placeholder="Votre adresse (ligne 1)" required={true}/>
							</div>
							<div className="mb-3">
								<label>Votre adresse (ligne 2):</label>
								<input type="text" className="form-control" placeholder="Votre adresse (ligne 2)"/>
							</div>
							<div className="mb-3">
								<label>Votre adresse (ligne 3):</label>
								<input type="text" className="form-control" placeholder="Votre adresse (ligne 3)"/>
							</div>
							<div className={"row"}>
								<div className="mb-3 col">
									<label htmlFor="">Votre code postal *:</label>
									<input type="number" className="form-control" placeholder="Votre code postal" required={true}/>
								</div>
								<div className="mb-3 col">
									<label htmlFor="">Votre ville *:</label>
									<input type="text" className="form-control" placeholder="Votre ville" required={true}/>
								</div>
								<div className="mb-3 col">
									<label htmlFor="">Votre entreprise :</label>
									<input type="text" className="form-control" placeholder="Votre entreprise" required={false}/>
								</div>
							</div>
						</div>
						<div className={"flex flex-row mt-2"}>
							<h5>Contact</h5>
							<div className={"row"}>
								<div className={"mb-3 col"}>
									<label htmlFor="">Votre adresse mail *:</label>
									<input type="text" className="form-control" placeholder="Votre adresse mail" required={true}/>
								</div>
								<div className={"mb-3 col"}>
									<label htmlFor="">Votre téléphone *:</label>
									<input type="phone" className="form-control" placeholder="Votre téléphone" required={true}/>
								</div>
							</div>
						</div>

						<div className={"row mt-4 mb-4"}>
							<div className={"col"}>
								<a className={"btn btn-secondary"} href={"#booking-2"}>Retour</a>
							</div>
							<div className={"col"}>
								<button className={"btn btn-outline-info"}>Partager</button>
							</div>

							<div className={"col"}>
								<a className={"btn btn-primary"} href={"#booking-4"}>Suivant</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}