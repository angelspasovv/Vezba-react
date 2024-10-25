import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharachterDetails } from '../actions/charachterDetailActions';
import { useParams } from 'react-router-dom';
import "./CharachtersDetails.scss"

const CharacterDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { charachter, loadingCharachter, error } = useSelector(state => state.charachterDetailReducer);

    useEffect(() => {
        dispatch(fetchCharachterDetails(id));
    }, [dispatch, id]);

    if (loadingCharachter) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="character-details-page">
            <h2>{charachter.name}</h2>
            <img src={charachter.image} alt={charachter.name} />
            <p>Species: {charachter.species}</p>
            <p>Gender: {charachter.gender}</p>
            <p>Status: {charachter.status}</p>
            <p>Origin: {charachter.origin.name}</p>
            <p>Location: {charachter.location.name}</p>
        </div>
    );
};

export default CharacterDetailsPage;
