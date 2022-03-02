import IconButton from '../molecules/IconButton'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'

const CloseButton = props =>
  <StyledIconButton className={props.className} onClick={props.onClick}>
    <FiX color={props.color} size={props.size} />
  </StyledIconButton>

const StyledIconButton = styled(IconButton)`
  transition: transform .25s, opacity .25s;
	opacity: .7;

  &:hover {
	  opacity: 1;
	  transform: rotate(90deg);
  }
`

export default CloseButton
