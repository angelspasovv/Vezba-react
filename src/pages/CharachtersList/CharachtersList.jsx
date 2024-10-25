import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharachters } from '../actions/charachterActions';
import CharacterCard from '../components/CharacterCard';
import { useHistory } from 'react-router-dom';
import "./CharachtersList.scss"

const CharactersList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { charachters, loadingCharachters, error } = useSelector(state => state.charachtersReducer);

    useEffect(() => {
        dispatch(fetchCharachters(1)); 
    }, [dispatch]);

    const handleDetails = (charachterId) => {
        history.push(`/characters/${charachterId}`); 
    };

    if (loadingCharachters) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="characters-page">
            {charachters.map(character => (
                <CharacterCard 
                    key={character.id} 
                    character={character} 
                    onDetails={() => handleDetails(character.id)} 
                />
            ))}
        </div>
    );
};

export default CharactersList;
