import React from 'react';

const Card = ({id, name, email}) => {

    return (
        <div className="robotDiv">
            <img src={`https://robohash.org/robot-${id}?200x200`} alt='Alt text'/>
            <div className="robotDetails">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;