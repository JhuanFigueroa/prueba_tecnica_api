import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    const [pokemons,setPokemons]=useState([]);
    const getPokemons= async()  =>{
        //recuperamos los datos de la api
        const rta= await  axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
        setPokemons(rta.data.results);
    }


    useEffect(()=>{
        getPokemons();
    },[]);

    return (
        <div className="pokemon-list">
            {pokemons.map(pokemon=>(
                <div>
                    <PokemonCard pokemon={pokemon}/>
                </div>
            ))}
        </div>
    );
};

export default PokemonList;