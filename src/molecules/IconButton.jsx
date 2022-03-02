import styled from 'styled-components'

const IconButton = props => <StyledButton className={props.className} onClick={props.onClick}>{props.children}</StyledButton>

const StyledButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`

export default IconButton
