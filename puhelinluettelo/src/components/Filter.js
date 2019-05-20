import React from 'react'

const Filter = ({targetName, handleTargetChange}) => {
    return (
    <div>
        rajaa näytettäviä: <input value={targetName} onChange={handleTargetChange}/>
    </div>
    )
}

export default Filter