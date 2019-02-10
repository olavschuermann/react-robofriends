import React from 'react';

const Card = ({id, name, email}) => {

    return (
        <div>
            <img src={`https://robohash.org/robot-${id}?200x200`} alt='Alt text'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;