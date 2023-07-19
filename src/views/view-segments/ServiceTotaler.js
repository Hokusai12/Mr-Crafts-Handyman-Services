import { useState } from 'react';

function ServiceTotaler({dropTile, setSafeDrop, safeDrop, sendQuote, needsUpdate}) {
    
    const [services, setServices] = useState([]);
    const [total, setTotal] = useState(0);

    function _sendQuote(services) {
        sendQuote(services);
    }

    function onDropTile(e) {
        setSafeDrop(false);
        var newService = dropTile(e);
        if(newService) {
            var newServArr = [];
            services.forEach(serv => newServArr.push(serv));
            newServArr.push(newService);
            setTotal(total + newService.price);
            setServices(newServArr.map(serv => serv));
        }
    }
    
    function onDragLeave() {
        setSafeDrop(false);
    }

    function dragOver(ev) {
        ev.preventDefault();
        if(safeDrop == false) {
            setSafeDrop(true);
        }
    }

    function removeService(service) {
        var newServArr = services.filter((serv) => serv.id !== service.id);
        service.isAvailable = true;
        setServices(newServArr.map(serv => serv));
        setTotal(total - service.price);
    }

    return (
        <div id="service-total-div" onDrop={(e) => onDropTile(e)} onDragLeave={onDragLeave} onDragOver={(ev) => {dragOver(ev)}} className="col-4 bg-blue p-3 rounded">
            {
                services.map(service => <div onDragOver={(ev) => {dragOver(ev)}} servicekey={service.key} className="bg-white rounded m-2 p-2 d-flex justify-content-between"><span>{service.name}: {service.price}</span><span onClick={() => { removeService(service) }}>X</span></div>)
            }
            <p>Total: {total}</p>
            <button onClick={() => {_sendQuote(services)}} className="btn btn-light">Send Quote</button>
        </div>
    );
}

export default ServiceTotaler;