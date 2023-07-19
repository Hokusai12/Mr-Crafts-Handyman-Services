import { AppViews } from './App';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import Tile from '../models/Tile';
import Service from '../models/Service';


import ServiceSelector from './view-segments/ServiceSelector';
import ServiceTotaler from './view-segments/ServiceTotaler';

var servArr = [];

emailjs.init('mA1yWcrKrTFHusgtw');

function initServices() {
    servArr.push(new Service(0, "Lawncare", "Lawnmowing", 30, true));
    servArr.push(new Service(1, "Lawncare", "Landscaping", 80, true));
    servArr.push(new Service(2, "Automotive Repair", "Preventative Maintenance", 50, true));
    servArr.push(new Service(3, "Automotive Repair", "Sucking exhaust fumes", 0, true));
    servArr.push(new Service(4, "Remodeling", "Electrical Remodeling", 30, true));
    servArr.push(new Service(5, "Remodeling", "Wall teardown", 50, true));
    servArr.push(new Service(6, "Construction", "Windows", 30, true));
    servArr.push(new Service(7, "Construction", "House Extension", 400, true));
}

function getTileObjsFromServices(services) { //Returns an array of tile objects based off of the categorization of different services
    var tileArr = new Array();
    var tile = new Tile(0, services[0].category, [services[0]]);
    for(var i = 1; i < services.length; i++) {
        if(services[i].category == tile.name) {
            tile.services.push(services[i]);
        } else {
            tileArr.push(tile);
            tile = new Tile(i, services[i].category, [services[i]]);
        }
        if(i == services.length -1) {
            tileArr.push(tile);
        }
    }

    return tileArr;
}


initServices();

function ServicesPage({updateView}) {

    const [services, setServices] = useState(servArr.map(service => service));
    const [safeDrop, setSafeDrop] = useState(false);
    const [needsUpdate, setNeedsUpdate] = useState(false);

    function _updateView(page) {
        if(page !== AppViews.ContactPage) { //Filler page, need to update when transaction pages are made
            resetServices();
        }
        updateView(page);
    }

    function sendQuote(services) {
        console.log("Sending Quote!");
        emailjs.send(
            'default_service', 
            'quote_form', 
        {
            'quote_id': 1,
            'from_name': 'Test',
            'services': services.map((serv) => serv.name),
            'note': 'Thanks!'
        }
        ).then((response) => {
            console.log('SUCCESS!!!', response.status, response.text);
        },
        (err) => {
            console.log('FAILED!!!', err);
        })
    }

    function resetServices() {
        var newArr = services.map((service) => {
            if(!service.isAvailable) {
                service.isAvailable = true;
            }
        })
        setServices(newArr.map(serv => serv));
    }

    function dropTile(ev) { //Handles the drop event and sends the necessary service data to the totaler div
        ev.preventDefault();
        if(ev.target.id != "service-select-div" && ev.target.id != "service-total-div" && ev.target.getAttribute("servicekey") == null) {
            return null;
        }
        var serviceKey = ev.dataTransfer.getData("text");
        var service = services.filter(service => service.key == serviceKey);
        if(service == null || service[0].isAvailable == false) {
            return null;
        }
        service[0].isAvailable = false;
        return service[0];
    }
    
    return (
        <div className="container d-flex flex-column text-white">            
            <h1>Get a Quote Now!</h1>
            <div className="container p-5 bg-white rounded">
                <div className="row w-100 gx-5 justify-content-between text-black">
                    <ServiceTotaler dropTile={dropTile} setSafeDrop={setSafeDrop} safeDrop={safeDrop} sendQuote={sendQuote} needsUpdate={needsUpdate}/>
                        <ServiceSelector dropTile={dropTile} tileData={getTileObjsFromServices(services)} safeDrop={safeDrop} needsUpdate={needsUpdate}/>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;