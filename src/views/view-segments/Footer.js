import {AppViews} from '../App'

function Footer({updateView}) {

    return (
        <footer className="container-fluid d-flex p-3 bg-black bg-gradient-reverse">
            <img className="img" style={{maxHeight: "150px"}} src="mr-crafts-imgs/mr-crafts-logo-handyman-services.svg" alt="New Arks Handyman Services Logo and Information"/>
            <div className="d-flex justify-content-evenly align-items-center flex-fill text-white">
                <a onClick={() => {updateView(AppViews.AboutPage)}}>About</a>
                <a onClick={() => {updateView(AppViews.ServicesPage)}}>Services</a>
                <a onClick={() => {updateView(AppViews.ContactPage)}}>Contact Us</a>
                <a onClick={() => {updateView(AppViews.LandingPage)}}>Homepage</a>
            </div>
        </footer>
    );
}

export default Footer;