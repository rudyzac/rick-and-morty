import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import CharacterCard from "../components/CharacterCard"

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(response => {
      setCharacters(response.data.results)
      return response.data.results
    }).then(characters => {
      augmentWithEpisodes(characters)
    }).catch(e => {
      console.error(e.message);
    })
  }, [])

  const augmentWithEpisodes = characters => {
    characters.map(character => {
      const episodes = []

      character.episode.forEach(episode => {
        axios.get(episode)
          .then(result => {
            episodes.push(result.data.name)
          }).catch(e => {
            console.error(e.message);
          })
      })

      character.episodes = episodes
    })
  }

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
