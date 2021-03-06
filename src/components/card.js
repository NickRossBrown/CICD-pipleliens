import React from 'react';

const Card = ({ name, bestFinnish, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2'>
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{ name }</h2>
                <p>Best Finnish: { bestFinnish }</p>
            </div>
        </div>
    )
}

export default Card;