import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharacterList from './pages/CharacterList'; 
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={CharacterList} /> 
                <Route path="/characters/:id" component={CharacterDetailsPage} />
                <Route path="/favorites" component={FavoritesPage} />
            </Switch>
        </Router>
    );
};

export default App;
