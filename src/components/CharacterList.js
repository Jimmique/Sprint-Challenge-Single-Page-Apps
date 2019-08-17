import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [ characterList, setCharacterList ] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then( res => {
        console.log(res);
        setCharacterList(res.data.results);
      })
      .catch( err => {
        console.log(err);
      });
  }, [props.match.params.path]);


   return (
    <section className="character-list grid-view">
      { characterList.forEach( character => {
        return <CharacterCard key={character.id} {...character} />
      })}
    </section>
  );
}