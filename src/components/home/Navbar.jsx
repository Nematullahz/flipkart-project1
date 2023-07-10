
import {Box,Typography,styled} from '@mui/material';
import {navData} from '../../constants/Data';
import React from 'react'

const Components = styled(Box)(({ theme })=>({
  display:'flex',
  margin:'55px 130px 0 130px',
  justifyContent:'space-between',
  overflow:'hidden',
  background:'#fff',
  [theme.breakpoints.down('lg')]: {
    margin:0,
    
  }
}));
   


const Container = styled(Box)`
    padding:12px 8px;
    text-align:center;
`

const Text = styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
`
const Navbar = () => {
  return (
    <Components>
        {
          navData.map((data)=>(
            <Container key={data.id}>
              <img src={data.url} alt="nav" style={{width:64}} />
              <Text>{data.text}</Text>

            </Container>
          ))
        }
    </Components>
  )
}

export default Navbar