export default function BookingTop({ date_start, date_end, rooms }) {
	let people;
	rooms.forEach((it) => {
		people += it[0]
	})
	return (
		<>
			<div className={"row"}>
				TODO
				<div className={"col"}>
					<b>{date_start} - {date_end}</b>
				</div>

				<div className={"col"}>
					<b> {rooms.length} chambres - { people } personnes</b>
				</div>

				<div className={"col"}>
					<button className={"btn btn-danger"}>Partager</button>
				</div>
			</div>
		</>
	)
}