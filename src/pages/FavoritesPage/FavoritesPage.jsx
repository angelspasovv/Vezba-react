import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from '../components/CharacterCard';
import "./FavoritesPage.scss"

const FavoritesPage = () => {
    const { favorites } = useSelector(state => state.favouriteCharachters);

    return (
        <div className="favorites-page">
            {favorites.length === 0 ? (
                <p>No favorites added yet!</p>
            ) : (
                favorites.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))
            )}
        </div>
    );
};

export default FavoritesPage;
