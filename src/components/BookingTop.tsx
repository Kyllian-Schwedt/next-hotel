import {array} from "prop-types";
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/airbnb.css";
import "flatpickr/dist/l10n/fr.js"
import flatpickr from "flatpickr";
import CustomLocale = flatpickr.CustomLocale;

export default function BookingTop({ rooms}) {
	flatpickr.localize(flatpickr.l10ns.fr as CustomLocale)
	const date = new Date()
	let min_date, end_date = new Date()
	let people = 0;
	let date_start = new Date()
	let date_end = new Date(date_start + 3 * 24 * 60 * 60)
	for (let i = 0; i < rooms.length; i++) {
		people += rooms[i][0]
	}
	return (
		<>
			<div className={"row border-bottom mb-4 verical-align"}>
				<div className={"col"}>
					<div className={"d-flex flex-column border-end"} id={"start_date_form_input"}>
						<b>Date d'arrivée</b>
						<Flatpickr
							onChange={(dates, currentDateString, self, data) => {
								min_date = dates[dates.length - 1]
							}}
							id={"start_date_form"}
							options={{minDate: date, defaultDate: date, dateFormat: "d/m/Y"}}
							render={
								({defaultValue, value, ...props}, ref) => {
									return <CustomInput defaultValue={defaultValue} inputRef={ref} value={undefined} />
								}
							}
						/>
					</div>
					<div className={"d-flex flex-column"} id={"end_date_form_input"}>
						<b>Date de départ</b>
						<Flatpickr
							onChange={(dates, currentDateString, self, data) => {
								end_date = dates[dates.length - 1]
							}}
							id={"end_date"}
							options={{minDate: min_date, defaultDate: date, dateFormat: "d/m/Y"}}
							render={
								({defaultValue, value, ...props}, ref) => {
									return <CustomInput defaultValue={defaultValue} inputRef={ref} value={undefined} />
								}
							}
						/>
					</div>
				</div>

				<div className={"col"}>
					<div>
						<b>Nombre de chambres</b>
						<input type={"number"} defaultValue={"2"} className={"text-center border-none"}/>
					</div>
					<div>
						<b>Nombre de personnes</b>
						<input type={"number"} defaultValue={"4"} className={"text-center border-none"}/>
					</div>
				</div>

				<div className={"col m-2"}>
					<button className={"btn btn-secondary mr-auto"}>Modifier la recherche</button>
				</div>
			</div>
		</>
	)
}

function CustomInput({ value, defaultValue, inputRef, ...props}) {
	return (
		<input {...props} value={value} defaultValue={defaultValue} ref={inputRef} type={"date"} className={"border-none" +
			" text-center"}/>
	)
}