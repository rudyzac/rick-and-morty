import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import CharacterCard from "../components/CharacterCard"
import CharacterService from "../services/CharacterService"

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const characterService = new CharacterService()

    axios.get('https://rickandmortyapi.com/api/character').then(response => {
      const characters = response.data.results
      setCharacters(characters)
      return characters
    })
    .then(characters => characterService.augmentWithEpisodes(characters))
    .then(characters => characterService.augmentWithAdditionalLocationInfo(characters))
    .then(characters => characterService.augmentWithAdditionalOriginInfo(characters))
    .catch(e => console.error(e.message))
  }, [])

  

  return (
    <div>
      {characters.length > 0 &&
        <Container>
          {characters.map((c, i) => <CharacterCard key={i} character={c} />)}
        </Container>
      }
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding: 2.5rem 2.5rem;
`

export default CharacterGrid;
