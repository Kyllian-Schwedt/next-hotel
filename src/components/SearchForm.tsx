import {Raleway} from "@next/font/google";
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/airbnb.css";
import "flatpickr/dist/l10n/fr.js"
import flatpickr from "flatpickr";
import CustomLocale = flatpickr.CustomLocale;

const inter = Raleway({subsets: ['latin']})

export default function SearchForm() {
	flatpickr.localize(flatpickr.l10ns.fr as CustomLocale)
	const date = new Date()
	let min_date, end_date = new Date()
	return (
		<>
			<div className={"bg-form"}>
				<div className={"d-flex flex-column text-center max-w-440"}>
					<form method={"POST"} className={"bg-white border-radius-5"}>
						<div className={"d-flex flex-row border-bottom"}>
							<div className={"d-flex flex-column p-4 border-end"} id={"start_date_form_input"}>
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
							<div className={"d-flex flex-column p-4"} id={"end_date_form_input"}>
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
						<div className={"d-flex flex-column "}>
							<b>Nombre de personnes</b>
							<input type={"number"} defaultValue={"2"} className={"text-center border-none"}/>
						</div>
						<button type={"button"} className={"btn btn-primary mt-2"}>Réserver</button>
					</form>
				</div>
			</div>
		</>
	)
}

// @ts-ignore
function CustomInput({ value, defaultValue, inputRef, ...props}) {
	return (
		<input {...props} value={value} defaultValue={defaultValue} ref={inputRef} type={"date"} className={"border-none" +
			" text-center"}/>
	)
}