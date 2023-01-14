import BookingTop from "@/components/BookingTop";
import BookingForm1 from "@/components/BookingForm1";
import BookingForm3 from "@/components/BookingForm3";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";
import BookingForm4 from "@/components/BookingForm4";
import BookingForm2 from "@/components/BookingForm2";
import Confirmation from "@/components/Confirmation";

export default function Booking() {

	let rooms = [[3, null], [1, null]]
	return (
		<>
			<header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
				<a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Next-Hotel</a>
				<button className="navbar-toggler position-absolute d-md-none collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
						aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</header>

			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
						<BookingTop rooms={rooms}></BookingTop>
						<BookingForm1></BookingForm1>
						<BookingForm2></BookingForm2>
						<BookingForm3></BookingForm3>
						<BookingForm4></BookingForm4>
						<Confirmation date_start={new Date()} date_end={new Date( new Date() + 24 * 3 * 60 * 60 * 60)}></Confirmation>
					</main>
					<Footer></Footer>
				</div>
			</div>
		</>
	)
}