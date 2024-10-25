import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../actions/favouriteCharachters';
import "./CharachterCard.scss"

const CharacterCard = ({ character, onDetails }) => {
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(addFavorite(character));

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        localStorage.setItem('favorites', JSON.stringify([...favorites, character]));
    };

    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <button onClick={handleAddToFavorites}>Add to Favorite</button>
            <button onClick={onDetails}>More Details</button>
        </div>
    );
};

export default CharacterCard;
