import React from 'react';
import Card from './card';

const CardList = ({ buddies }) => {
  return (
    <div>
      {
        buddies.map((user, i) => {
          return (
            <Card
              key={i}
              id={buddies[i].id}
              name={buddies[i].name}
              email={buddies[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList