import { useState } from "react"
import styled from "styled-components"
import Gender from "./Gender"
import CharacterStatusIndicator from "./CharacterStatusIndicator"
import CharacterDetailsPopup from "./CharacterDetailsPopup"
import ActionButton from "./ActionButton"

const CharacterCard = props => {
  const [showCharacterDetailsPopup, setShowCharacterDetailsPopup] = useState(false)

  return (
    <Container>
      <StyledStatusIndicator status={props.character.status} data-test-id="status-indicator" />

      <InnerContainer>
        <Avatar src={props.character.image} alt={`${props.character.name}'s profile pic.`} data-test-id="avatar" />
        <Name data-test-id="name">{props.character.name}</Name>
        <Species data-test-id="species">{props.character.species}</Species>
        <StyledGender gender={props.character.gender} data-test-id="gender" />

        <ActionButton
          type="button"
          onClick={() => setShowCharacterDetailsPopup(true)}
          data-testid="details-button"
        >
          More
        </ActionButton>
      </InnerContainer>

      <CharacterDetailsPopup
        width="65%"
        height="65%"
        show={showCharacterDetailsPopup}
        characterData={props.character}
        close={() => setShowCharacterDetailsPopup(false)}
      />
    </Container>
  )
}

const spacingSmall = '0.625rem'

const Container = styled.div`
  width: 21.875rem;
  background-color: #222831;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding-top: 1.25rem;
`

const StyledStatusIndicator = styled(CharacterStatusIndicator)`
  position: relative;
  left: 1rem;
  color: #231E39;
	background-color: #FEBB0B;
  width: fit-content;
  border-radius: 3px;
	font-size: 0.875rem;
	font-weight: bold;
	padding: 0.188rem 0.438rem;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacingSmall};

  &:last-child {
    margin-bottom: ${spacingSmall};
  }
`

const Avatar = styled.img`
  width: 8rem;
  border: 1px solid #03BFCB;
  border-radius: 50%;
  padding: 0.438rem;
`

const Name = styled.p`
  margin: 0 0;
  font-size: 1.375rem;
  font-weight: 800;
`

const Species = styled.p`
	margin: 0;
  font-size: 0.875rem;
  font-weight: 800;
	text-transform: uppercase;
`
const StyledGender = styled(Gender)`
  height: 1.5rem;
`

export default CharacterCard
