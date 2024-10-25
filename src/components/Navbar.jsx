import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharachterDetails } from '../actions/searchCharachter';
import { Link } from 'react-router-dom';
import "./Navbar.scss"


const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchCharachterDetails(searchTerm));
        setSearchTerm('');
    };

    return (
        <nav>
            <Link to="/">Characters</Link>
            <Link to="/favorites">Favorites</Link>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search characters..."
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;