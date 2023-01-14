
export default function BookingForm4() {
    return (
        <div id={"booking-4"} className="container d-flex justify-content-center mt-5 mb-5">
            <div className="row g-3">
                <div className="col-md-6">
                    <span>Méthode de Paiement</span>
                    <div className="card">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header p-0">
                                    <div className="text-left p-3 rounded-0">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span>Carte bancaire</span>
                                            <div className="icons">
                                                <img src="https://i.imgur.com/2ISgYja.png" width="30"></img>
                                                <img src="https://i.imgur.com/W1vtnOV.png" width="30"></img>
                                                <img src="https://i.imgur.com/35tC99g.png" width="30"></img>
                                                <img src="https://i.imgur.com/2ISgYja.png" width="30"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                     data-parent="#accordionExample">
                                    <div className="card-body payment-card-body">
                                        <span className="font-weight-normal card-text">Nom du titulaire</span>
                                        <div className="input">
                                            <i className="fa fa-name"></i>
                                            <input type="text" className="form-control" placeholder="Jean PAUL"></input>
                                        </div>
                                        <span className="font-weight-normal card-text">Numéro de Carte</span>
                                        <div className="input">
                                            <i className="fa fa-credit-card"></i>
                                            <input type="text" className="form-control" placeholder="0000 0000 0000 0000"></input>
                                        </div>
                                        <div className="row mt-3 mb-3">
                                            <div className="col-md-6">
                                                <span className="font-weight-normal card-text">Date d'expiration</span>
                                                <div className="input">
                                                    <i className="fa fa-calendar"></i>
                                                    <input type="text" className="form-control" placeholder="MM/YY"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="font-weight-normal card-text">CVC/CVV</span>
                                                <div className="input">
                                                    <i className="fa fa-lock"></i>
                                                    <input type="text" className="form-control" placeholder="000"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3 mb-3">
                                            <div className="col-md-4">
                                                <a href="#confirmation" className="btn btn-primary">Finir</a>
                                            </div>
                                        </div>
                                        <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Votre transaction est sécurisée avec un certificat SSL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <span>Résumé</span>
                    <div className="card">
                        <div className="d-flex justify-content-between p-3">
                            <div className="d-flex flex-column">
                                <span>Montant HT <i className="fa fa-caret-down"></i></span>
                                <a href="#" className="billing">Plus d'informations</a>
                            </div>
                            <div className="mt-1">
                                <sup className="super-price">15.00€</sup>
                                <span className="super-month">/Nuit</span>
                            </div>
                        </div>
                        <hr className="mt-0 line"></hr>
                        <div className="p-3">
                            <div className="d-flex justify-content-between mb-2">
                                <span>TVA</span>
                                <span>+3.00€</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Vat <i className="fa fa-clock-o"></i></span>
                                <span>+20%</span>
                            </div>
                        </div>
                        <hr className="mt-0 line"></hr>
                        <div className="p-3 d-flex justify-content-between">
                            <div className="d-flex flex-column">
                                <span>Aujourd'hui, vous payez</span>
                            </div>
                            <span>18.00€</span>
                        </div>
                    </div>
                </div>
                <div className={"row mt-4"}>
                    <div className="col">
                        <a href="#booking-3" className="btn btn-secondary">Retour</a>
                    </div>
                    <div className="col">
                        <a href="#" className="btn btn-outline-info">Partager</a>
                    </div>
                    <div className={"col"}></div>
                </div>
            </div>
        </div>
    )
}