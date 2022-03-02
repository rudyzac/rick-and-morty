import axios from "axios"

export default class CharacterService {
  augmentWithEpisodes(characters) {
    characters.forEach(character => {
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

  augmentWithAdditionalLocationInfo(characters) {
    characters.forEach(character => {
      const locationDataUrl = character.location.url
      this.addGeographicData(character.location, locationDataUrl)
    })
    return characters
  }

  addGeographicData(objectToAugment, geographicDataUrl) {
    axios.get(geographicDataUrl).then(geographicData => {
      const data = geographicData.data
      this.setGeographicData(objectToAugment, data)
    })
      .catch(e => console.error(e.message))
  }

  setGeographicData(obj, geographicData) {
    obj.type = geographicData.type
    obj.dimension = geographicData.dimension
    obj.numberOfResidents = geographicData.residents?.length
  }

  augmentWithAdditionalOriginInfo(characters) {
    characters.forEach(character => {
      const originDataUrl = character.origin.url
      this.addGeographicData(character.origin, originDataUrl)
    })
    return characters
  }
}
