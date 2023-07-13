import { useState } from 'react';

function ServiceTile({tileObject, onTileClick}) {
    function tileClick() {
        onTileClick(tileObj.services);
    }

    const [tileObj, setTileObj] = useState({
        ...tileObject
    });


    return (
        <div id={tileObj.key} onClick={tileClick} style={{height: "150px", width: "150px"}} className="d-inline m-2 p-2 rounded bg-white">{tileObj.key} : {tileObj.name} &gt; {tileObj.services.map(service => service.name + "\n")}</div>
    );
}

export default ServiceTile;