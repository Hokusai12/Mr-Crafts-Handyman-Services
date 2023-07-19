import {AppViews} from '../App';

function Header({updateView}) {
    return(
        <>
            <nav className="navbar navbar-expand-lg px-5">
                    <a className="navbar-brand" href="#">
                        <img src="mr-crafts-imgs/mr-crafts-logo.svg" style={{maxHeight: "50px"}} className="img-fluid" alt="Mr. Craft's Handyman Services Logo"/> 
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav fs-5">
                            <li className="nav-item mx-5">
                                <button className="nav-link" onClick={() => {updateView(AppViews.LandingPage)}}>Home</button>
                            </li>
                            <li className="nav-item mx-5">
                                <button className="nav-link" onClick={() => {updateView(AppViews.AboutPage)}}>About Us</button>
                            </li>
                            <li className="nav-item mx-5">
                                <button className="nav-link" onClick={() => {updateView(AppViews.ServicesPage)}}>Get a Quote</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr style={{borderWidth: "5px"}} className="text-blue"/>
        </>
    );
}

export default Header;