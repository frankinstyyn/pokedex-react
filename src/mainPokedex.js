import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

const PokeProfile = () => {

  function randPokemon() {
    window.location.reload(false);
  };
    const [PokeType, SetPokeType] = useState("");
    const [PokeName, SetPokeName] = useState("");
    const [PokeImage, SetPokeImage] = useState("");
    const [PokeExp, SetPokeExp] = useState("");

    const PokeInfo = async () => {
        try {
            var x = 89; 
            var ranNum = Math.floor(Math.random()*x) + 60;
            const url = `https://pokeapi.co/api/v2/pokemon/${ranNum}`;
            const res = await axios.get(url);
            SetPokeImage(res.data.sprites.front_default);
            SetPokeName(res.data.name)
            SetPokeType(res.data.types[0].type.name);
            SetPokeExp(res.data.base_experience)
            
        }   catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        PokeInfo();
    }, []);

    return <div className="mainContainer">
      <div className="container">
        <h1>{PokeName}</h1>
        <img src={PokeImage} style={{width: "20%"}} />
        <h2>Type: {PokeType}</h2>
        <h3>Experience: {PokeExp}</h3>
        <button className="myButton" onClick={randPokemon}>Click for a Random Pokemon</button>
        <button className="myButton" onClick={event =>  window.location.href='/searchPokemon'}>Search for a Pokemon</button>
      </div>
    </div>
};

export default PokeProfile;

