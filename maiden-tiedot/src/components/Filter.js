import React from 'react';

const Filter = ({targetCountry, handleTargetChange}) => {

    return(
    <div>
        find countries: <input value={targetCountry} onChange={handleTargetChange}/>
    </div>
    )
}



export default Filter