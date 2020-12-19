import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokeProfile from './mainPokedex';
import Search from './searchPokemon';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <PokeProfile {...props} />} />
      <Route exact path="/searchPokemon" render={(props) => <Search {...props} />} />
    </Switch>
  );
}

export default App