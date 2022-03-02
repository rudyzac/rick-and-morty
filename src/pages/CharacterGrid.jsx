import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import CharacterCard from "../components/CharacterCard"

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(response => {
      const characters = response.data.results
      setCharacters(characters)
      return characters
    })
    .then(characters => augmentWithEpisodes(characters))
    .then(characters => augmentWithAdditionalLocationInfo(characters))
    .then(characters => augmentWithAdditionalOriginInfo(characters))
    .catch(e => console.error(e.message))
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
    return characters
  }

  const augmentWithAdditionalLocationInfo = characters => {
    characters.map(character => {
      const locationDataUrl = character.location.url
      addGeographicData(character.location, locationDataUrl)
    })
    return characters
  }

  const addGeographicData = (objectToAugment, geographicDataUrl) => {
    axios.get(geographicDataUrl).then(geographicData => {
      const data = geographicData.data
      setGeographicData(objectToAugment, data)
    })
      .catch(e => console.error(e.message))
  }

  const setGeographicData = (obj, geographicData) => {
    obj.type = geographicData.type
    obj.dimension = geographicData.dimension
    obj.numberOfResidents = geographicData.residents?.length
  }

  const augmentWithAdditionalOriginInfo = characters => {
    characters.map(character => {
      const originDataUrl = character.origin.url
      addGeographicData(character.origin, originDataUrl)
    })
    return characters
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
