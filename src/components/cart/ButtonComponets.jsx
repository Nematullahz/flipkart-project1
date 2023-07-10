




import { Button,ButtonGroup,styled } from '@mui/material'
import React from 'react'

const Components = styled(ButtonGroup)`
    margin-top:30px;
`
const StyleButton = styled(Button)`
    border-radius:50%;
`
const ButtonComponets = () => {
  return (
   <Components>
        <StyleButton>-</StyleButton>
        <StyleButton>1</StyleButton>
        <StyleButton>+</StyleButton>
   </Components>
  )
}

export default ButtonComponets
