import ServiceTile from './ServiceTile';
import { useState } from 'react';

function ServiceSelector({dropTile, tileData, safeDrop, needsUpdate}) {

    const [view, setView] = useState("tiles");
    const [services, setServices] = useState([]);

    if(needsUpdate) {
        updateServices();
    }

    function updateServices() {
        if(services !== null || services !== []) {

        }
    }

    function onDrag(ev) {
        var serviceKey = ev.target.getAttribute("servicekey")
        ev.dataTransfer.setData("text", serviceKey); //Sends the key of the service
    }
    
    function onDragEnd(ev) {
        console.log(safeDrop);
        if(safeDrop) {
            var serviceKey = ev.target.getAttribute("servicekey");
            var newServArr = services.map(service => service);
            newServArr.forEach((service) => {
                if(service.key == serviceKey) {
                    newServArr.splice(newServArr.indexOf(service), 1);
                }
            });
            setServices(newServArr.map(service => service));
        }
    }

    function tileClick(services) {
        setView("services");
        document.getElementById("service-select-div").classList.toggle("justify-content-center");
        document.getElementById("service-select-div").classList.toggle("d-flex");
        setServices(services.map(service => service));
    }

    function switchToTileView() {
        setView("tiles");
        document.getElementById("service-select-div").classList.toggle("justify-content-center");
        document.getElementById("service-select-div").classList.toggle("d-flex");
        setServices([]);
    }
    

    return (
        <div id="service-select-div" className="col-4 bg-blue p-2 rounded text-black d-flex flex-wrap justify-content-center">
            {
                (view === "services") 
                    ? <p onClick={switchToTileView}>&lt; Go Back</p>
                    : <></>
            }
            {
                (view === "tiles") 
                    ? tileData.map(tile => <ServiceTile tileObject={tile} onTileClick={tileClick}/>)
                    : services.map((service) => {
                        if(service.isAvailable) {
                            return <div draggable onDragEnd={onDragEnd} onDragStart={onDrag} servicekey={service.key} className="bg-white rounded m-2 p-2">{service.name}: {service.price}</div>
                        }
                    })
            }
        </div>
    );
}

export default ServiceSelector;