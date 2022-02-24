import styled from "styled-components"

const StatusIndicator = props => 
  <Container className={props.className}>
    <Dot status={props.status} />
    <span>{props.status}</span>
  </Container>

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
`
const Dot = styled.span`
  height: 0.8rem;
  width: 0.8rem;
  background-color: ${props => computeDotColor(props.status)};
  border-radius: 50%;
  display: inline-block;
`

const computeDotColor = status => {
  switch (status) {
    case 'Alive':
      return 'green'
    case 'Dead':
      return 'red'
    default:
      return 'white'
  }
}

export default StatusIndicator
