import {AppViews} from './App';
import Footer from './view-segments/Footer';

function LandingPage({updateView}) {


    return (
        <div className="container d-flex flex-column py-3">    
            <div className="row justify-content-evenly align-items-center mb-5">
                <img src="mr-crafts-imgs/mr-crafts-logo-handyman-services.svg" style={{maxHeight: "300px"}} className="img-fluid col mb-4" alt="New Arks Handyman Services Logo"/> 
            </div>
            <div className="row justify-content-between my-5">
                <div className="col-6">
                    <h3 className="text-blue">Quotes Blurb?</h3>
                    <p style={{textAlign:"Justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a. Tellus mauris a diam maecenas sed enim ut sem viverra. Et molestie ac feugiat sed lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Hendrerit gravida rutrum quisque non tellus orci ac. Hendrerit dolor magna eget est lorem ipsum dolor sit. Diam phasellus vestibulum lorem sed risus ultricies tristique. Mattis enim ut tellus elementum sagittis vitae et leo duis. Proin nibh nisl condimentum id venenatis a condimentum. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Bibendum at varius vel pharetra vel turpis nunc eget. Et netus et malesuada fames. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Ut eu sem integer vitae justo eget magna fermentum. Nam at lectus urna duis convallis convallis tellus id. Cras semper auctor neque vitae tempus quam. Euismod elementum nisi quis eleifend quam adipiscing vitae. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Nisl tincidunt eget nullam non nisi.</p>
                    <button onClick={() => {updateView(AppViews.ServicesPage)}} className="btn align-self-start">Get Quoted!</button>
                </div>
                <div className="col-5">
                    <img width="100%" src="pexels-ron-lach-8821015.jpg"/>
                </div>
            </div>
            <div className="mt-5 row justify-content-between">
                <div className="col-4">
                    <img width="150%" src="pexels-kevin-bidwell-1388278.jpg"/>
                </div>
                <div className="col-6">
                    <h3 className="text-blue">Services Available Blurb?</h3>
                    <p style={{textAlign:"Justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a. Tellus mauris a diam maecenas sed enim ut sem viverra. Et molestie ac feugiat sed lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Hendrerit gravida rutrum quisque non tellus orci ac. Hendrerit dolor magna eget est lorem ipsum dolor sit. Diam phasellus vestibulum lorem sed risus ultricies tristique. Mattis enim ut tellus elementum sagittis vitae et leo duis. Proin nibh nisl condimentum id venenatis a condimentum. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Bibendum at varius vel pharetra vel turpis nunc eget. Et netus et malesuada fames. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Ut eu sem integer vitae justo eget magna fermentum. Nam at lectus urna duis convallis convallis tellus id. Cras semper auctor neque vitae tempus quam. Euismod elementum nisi quis eleifend quam adipiscing vitae. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Nisl tincidunt eget nullam non nisi.</p>
                    <button onClick={() => {updateView(AppViews.LoginPage)}} className="btn align-self-start">LoginPage</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;