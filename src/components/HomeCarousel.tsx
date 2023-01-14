import styles from '@/styles/Home.module.css'
import { useEffect } from 'react';

export default function HomeCarousel() {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images_chambres/white-bed-next-to-white-accent-table-90319.jpg" className="d-block w-100" alt="..."></img>
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>Double classique</h1>
                            <p>Cette chambre double classique est élégante et confortable, équipée de lits douillets, d'une télévision à écran plat et d'une salle de bain privée. Elle est idéale pour les couples en voyage d'affaires ou en vacances.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images_chambres/hotel-saint-vincent-double-superieure-1-3.jpg" className="d-block w-100" alt="..."></img>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Famille triple</h1>
                            <p>Cette chambre familiale spacieuse dispose de lits confortables pour trois personnes, d'une télévision à écran plat et d'une salle de bain privée. Elle est idéale pour les familles en voyage d'affaires ou en vacances.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images_chambres/hotel-room-1447201_1920.jpg" className="d-block w-100" alt="..."></img>
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Simple</h1>
                            <p>Cette chambre simple est pratique et élégante, équipée d'un lit confortable, d'une télévision à écran plat et d'une salle de bain privée. Elle est idéale pour les voyageurs d'affaires ou les vacanciers en solo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}