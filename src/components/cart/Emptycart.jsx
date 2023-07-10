

import {Box,Typography,styled} from '@mui/material';
import React from 'react'

const Componets = styled(Box)`
    height:65vh;
    width:80%;
    background:#fff;
    margin:80px 140px;
`
const Container = styled(Box)`
    padding-top:70px;
    text-align:center;
`

const Emptycart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <Componets>
        <Container>
            <img src={imgurl} alt="empty" style={{width:'15%'}}/>
            <Typography>Your cart is empty</Typography>
            <Typography>Add item to it now</Typography>
        </Container>
    </Componets>
  )
}

export default Emptycart
