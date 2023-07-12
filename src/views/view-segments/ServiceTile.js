import { useState } from 'react';

function ServiceTile({tileObject, onTileClick}) {
    function tileClick() {
        onTileClick(tileObj.services);
    }

    const [tileObj, setTileObj] = useState({
        ...tileObject
    });


    return (
        <div id={tileObj.key} onClick={tileClick} className="d-inline-block m-2 p-2 rounded  bg-white">{tileObj.key} : {tileObj.name} &gt; {tileObj.services.map(service => service.name)}</div>
    );
}

export default ServiceTile;