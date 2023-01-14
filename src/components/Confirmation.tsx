export default function Confirmation({date_start, date_end}) {
	return (
		<>
			<div>
				<h4 className={"text-center"}>Votre chambre a bien été reservée !</h4>
				<b className={"text-center"}>Elle est réservée du {date_start.toLocaleString('fr')} au {date_end.toLocaleDateString('fr')}.</b>
				<p>Les informations nécessaires vous ont été communiqués dans l'email de confirmation de la réservation </p>
			</div>
		</>
	)
}