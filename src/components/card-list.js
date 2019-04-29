import React from 'react';
import Card from './card';

const CardList = ({ members }) => {
  return (
    <div>
      {
        members.map((user, i) => {
          return (
            <Card
              key={i}
              id={members[i].id}
              name={members[i].name}
              bestFinnish={members[i].bestFinnish}
              />
          );
        })
      }
    </div>
  );
}

export default CardList