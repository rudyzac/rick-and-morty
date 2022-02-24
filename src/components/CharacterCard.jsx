import styled from "styled-components"
import Gender from "./Gender"
import StatusIndicator from "./StatusIndicator"

const CharacterCard = props =>
  <Container>
    <StyledStatusIndicator status={props.character.status} data-test-id="status-indicator" />
    
    <InnerContainer>
      <Avatar src={props.character.image} alt={`${props.character.name}'s profile pic.`} data-test-id="avatar" />
      <Name data-test-id="name">{props.character.name}</Name>
      <Species data-test-id="species">{props.character.species}</Species>
      <StyledGender gender={props.character.gender} data-test-id="gender" />
    </InnerContainer>
  </Container>

const spacingSmall = '0.625rem'

const Container = styled.div`
  width: 21.875rem;
  background-color: #222831;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding-top: 1.25rem;
`

const StyledStatusIndicator = styled(StatusIndicator)`
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
`

const Avatar = styled.img`
  width: 8rem;
  border: 1px solid #03BFCB;
  border-radius: 50%;
  padding: 0.438rem;
  margin-bottom: ${spacingSmall};
`

const Name = styled.p`
  margin: 0 0 ${spacingSmall};
  font-size: 1.375rem;
  font-weight: 800;
`

const Species = styled.p`
	margin: 0;
  font-size: 0.875rem;
  font-weight: 800;
	text-transform: uppercase;
  margin-bottom: ${spacingSmall};
`
const StyledGender = styled(Gender)`
  margin-bottom: ${spacingSmall};
`

export default CharacterCard
