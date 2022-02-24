import styled, { css } from "styled-components"
import FemaleSymbol from "../icons/FemaleSymbol"
import MaleSymbol from "../icons/MaleSymbol"

const Gender = props => 
  <div className={props.className}>
    {mapGenderToSymbol(props.gender)}
  </div>

const mapGenderToSymbol = gender => {
  switch(gender) {
    case 'Male':
      return <StyledMaleSymbol />
    case 'Female':
      return <StyledFemaleSymbol />
    default:
      return ''
  }
}

const genderSymbolStyles = css`
  width: 1rem;
  fill: white;
`

const StyledMaleSymbol = styled(MaleSymbol)`
  ${genderSymbolStyles}
`

const StyledFemaleSymbol = styled(FemaleSymbol)`
  ${genderSymbolStyles}
`

export default Gender
