import styled from 'styled-components'
import Dialog from '../molecules/Dialog'

const CharacterDetailsPopup = props =>
  <StyedDialog width="65%" height="65%" show={props.show} close={props.close} className={props.className}>
    <Content>

      <NameContainer>
        <Name>{props.characterData.name}</Name>
      </NameContainer>

      <SectionTitle>Bio</SectionTitle>
      <Section>
        <li><span>Status:</span> {preprocessDatum(props.characterData.status)}</li>
        <li><span>Species:</span> {preprocessDatum(props.characterData.species)}</li>
        <li><span>Type:</span> {preprocessDatum(props.characterData.type)}</li>
        <li><span>Gender:</span> {preprocessDatum(props.characterData.gender)}</li>
      </Section>

      <SectionTitle>Origin</SectionTitle>
      <Section>
        <li><span>Name:</span> {preprocessDatum(props.characterData.origin.name)}</li>
        <li><span>Type:</span> {preprocessDatum(props.characterData.origin.type)}</li>
        <li><span>Dimension:</span> {preprocessDatum(props.characterData.origin.dimension)}</li>
        <li><span>Population:</span> {preprocessDatum(props.characterData.origin.numberOfResidents)}</li>
      </Section>

      <SectionTitle>Location</SectionTitle>
      <Section>
      <li><span>Name:</span> {preprocessDatum(props.characterData.location.name)}</li>
      <li><span>Type:</span> {preprocessDatum(props.characterData.location.type)}</li>
      <li><span>Dimension:</span> {preprocessDatum(props.characterData.location.dimension)}</li>
      <li><span>Population:</span> {preprocessDatum(props.characterData.location.numberOfResidents)}</li>
      </Section>

      <SectionTitle>
        Featured in {props.characterData.episodes?.length === 1 ? 'episode' : 'episodes'}:
      </SectionTitle>

      <EpisodeList>{props.characterData.episodes?.map((episode, index) => 
        index !== props.characterData.episodes.length - 1 ? `${episode}, ` : `${episode}.`)}
      </EpisodeList>

    </Content>
  </StyedDialog>

const StyedDialog = styled(Dialog)`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 1rem;
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Name = styled.h1`
  margin-bottom: 0;
  padding: auto 3rem;
`

const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 1.375rem;
  margin-bottom: 0.5rem;
`

const Section = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  list-style-type: none;
  padding: 0;

  & > li {
    margin: 0 3rem 1rem 0;
    white-space: break-spaces;

    & > span:first-of-type {
      font-weight: bold;
    }
  }

  & > li:last-of-type {
    margin-right: 0;
  }
`

const preprocessDatum = datum => datum === 'unknown' ? '--' : datum || '--'

const EpisodeList = styled.p`
  line-height: 1.6;
  font-style: italic;
`

export default CharacterDetailsPopup
