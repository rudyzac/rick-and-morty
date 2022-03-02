import styled from "styled-components";

const ActionButton = styled.button`
  background-color: #03BFCB;
	border: 1px solid #03BFCB;
	border-radius: 3px;
	color: #231E39;
  font-size: 1rem;
	font-weight: bold;
	padding: 0.5rem 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: #02ABB6;
    border: 1px solid #02ABB6;
  }

  &:active {
    background-color: #0298A2;
    border: 1px solid #0298A2;
  }
`

export default ActionButton
