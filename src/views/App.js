import '../App.css';
import { useState } from 'react';
import Footer from './view-segments/Footer';
import Header from './view-segments/Header';

import LoginPage from './authentication/LoginPage';
import LandingPage from './LandingPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import Tile from '../models/Tile';

export const AppViews = {
  LoginPage: "LoginPage",
  LandingPage: "LandingPage",
  ServicesPage: "ServicesPage",
  AboutPage: "AboutPage",
  ContactPage: "ContactPage"
};

function App() {

  const [currentPage, setCurrentPage] = useState(AppViews.LandingPage);

  function getViewReactElement(view) {

    switch(currentPage) {
      case AppViews.LoginPage:
        return (<LoginPage updateView={setCurrentPage}/>);
      case AppViews.LandingPage:
        return (<LandingPage updateView={setCurrentPage}/>);
      case AppViews.ServicesPage:
        return (<ServicesPage updateView={setCurrentPage}/>);
      case AppViews.AboutPage:
        return (<p>Waiting for about page</p>);
      case AppViews.ContactPage:
        return (<ContactPage updateView={setCurrentPage}/>);
      default:
        return (<p>You broke it congratulations!</p>);
    }
  }

  return (
    <>
      <div className="background">   
        { 
        //(currentPage !== AppViews.LandingPage)
          <Header updateView={setCurrentPage}/>
          //:<></>
        }
        {
          getViewReactElement(currentPage)
        }
      </div>
      <Footer updateView={setCurrentPage}/>
    </>
  );
}

export default App;