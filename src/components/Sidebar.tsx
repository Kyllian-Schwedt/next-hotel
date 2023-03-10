export default function Sidebar() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <span data-feather="home"></span>
                            Accueil
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file"></span>
                            Chambres
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="shopping-cart"></span>
                            Services
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}