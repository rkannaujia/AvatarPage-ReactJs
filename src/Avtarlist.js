import React from 'react';

const Avatarlist = (props) => {
    return (
        <div className="avatarstyle ma3 bg-light-purple dib pa2 tc grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"></img>
            <h1 className>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default Avatarlist;