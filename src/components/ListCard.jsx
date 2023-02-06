import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setCards(response.data);
    });
  }, []);

  return (
    <ul>
      {cards.map((card) => (
        <li key={card.id}>
          <h3>{card.id}</h3>
          <Link to={`posts/${card.id}`}>
            <h3>{card.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListCard;
