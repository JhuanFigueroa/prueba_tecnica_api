import React, {useEffect, useState} from 'react';
import axios from "axios";

const PokemonCard = ({pokemon}) => {
    const[img,setImg]=useState('');
    const [types,setTypes]=useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = () => {
        //cambiamos el estado de favorito del pokemon
        setIsFavorite(!isFavorite);
    };

    const divStyle = {
        //si el pokemon es favorito el card es azul, si no, es blanco
        backgroundColor: isFavorite ? 'skyblue' : 'white',
    };

    useEffect(()=>{
       const res=  axios.get(pokemon.url).then(
           rta=>{
               //de cada pokemon recupero la imagen y de que tipo son
               setImg(rta.data.sprites.front_default)
               setTypes(rta.data.types)
           }
       )
    },[pokemon.url]);
    return (
        <div className="pokemon-card" style={divStyle}>
            <img src={img} alt=""/>
            <p>{pokemon.name}</p>
            <div className="pokemon-type">
                {types.map(type=>(
                    <span>{type.type.name}</span>
                ))}
            </div>
            <button className="btn-like" onClick={handleFavoriteClick}>F</button>
        </div>
    );
};

export default PokemonCard;