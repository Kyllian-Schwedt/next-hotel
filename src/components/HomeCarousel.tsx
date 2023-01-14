import styles from '@/styles/Home.module.css'
export default function HomeCarousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className={styles.carousel_img}>
                    <div className="carousel-item active">
                        <img src="/images_chambres/hotel-room-1447201_1920.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="/images_chambres/hotel-saint-vincent-double-superieure-1-3.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="/images_chambres/white-bed-next-to-white-accent-table-90319.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    )
}