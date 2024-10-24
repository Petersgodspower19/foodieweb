import React from 'react'
import {styled} from "styled-components"

const StyledButton = styled.button`
    width: 100px;
    padding: 5px;
    border-radius: 15px;
    border: 2px solid #F4511F;
    background-color: inherit;
    color: #F4511F;
    cursor: pointer;

    &:hover{
      background-color: #F4511F;
      color:white;
    }
`

function Button({children}) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default Button
