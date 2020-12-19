import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";


const Search = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const fetchPokemon = async () => {
    const toArray = []; 
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res);
    } catch (e) { 
      console.log(e);
    }
  };

  const handleChange = (f) => {
    setPokemon(f.target.value.toLowerCase());
  };

  const handleSubmit = (f) => {
    // stops page refreshing
    f.preventDefault();
    fetchPokemon();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        <input className="searchFunction"
          type="text"
          onChange={handleChange}
          placeholder="Search for Pokemon here"
        />
      </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div className="align">
          <div className="mainSearchContainer">
            <img className="searchImage" src={data.sprites["front_default"]}/>
            </div>
          <div className="mainContainer">
            <div className="pokeTable">
              <div className="pokeTableBody">
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Type</div>
                  <div className="pokeTableCell">{pokemonType}</div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Battles</div>
                  <div className="pokeTableCell">{data.game_indices.length}</div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Height</div>
        <div className="pokeTableCell">{" "}{Math.round(data.height * 3.9 * 2.54)} cm</div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Weight</div>
        <div className="pokeTableCell">{" "}{Math.round(data.weight / 4.3 / 2.205)} kg</div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Number of Moves</div>
                  <div className="pokeTableCell">{data.moves.length}</div>
                </div>
              </div>
              </div>
            </div>
            </div>
        )
      })}
            <button className="myButton1" onClick={event =>  window.location.href='/'}>Random Pokemon</button>
    </div>
  );
};

export default Search;
