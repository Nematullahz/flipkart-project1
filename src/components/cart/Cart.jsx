
import { useSelector } from 'react-redux';
import {Box, Button, Typography,styled} from '@mui/material';
import React from 'react'
import { Grid } from '@mui/material';
import CartItem from './CartItem';
import TotalView from './TotalView';
import Emptycart from './Emptycart';
import { useNavigate } from 'react-router-dom';

const Container = styled(Grid)(({theme})=>({
  padding:'30px 135px',
  [theme.breakpoints.down('md')]:{
    padding:'30px 0'
  }
}))
  

const Header = styled(Box)`
  padding:15px 24px;
  background:#fff;
`
const ButtonWraper = styled(Box)`
  padding:16px 22px;
  background:#fff;
  box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
`
const StyleButton = styled(Button)`
  display:flex;
  margin-left:auto;
  background:#fb641b;
  color:#fff;
  width:250px;
  height:51px;
  border-radius:3px;
`

const LeftComponent = styled(Grid)(({theme})=>({
  paddingRight:15,
  [theme.breakpoints.down('md')]:{
    marginBottom:15,
  }
}))
  

const Cart = () => {
  const {cartItems}=useSelector(state=>state.cart);
  const navigate = useNavigate();
  const orderedPlaced = ()=>{
      navigate('/success');
  }
  // console.log(cartItems);
  return (
    <>
      {
        cartItems.length ?
        <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12} >
              <Header>
                <Typography>My Cart ({cartItems.length})</Typography>
              </Header>
              {
                cartItems.map(item=>(
                  <CartItem item={item}/>
                ))
              }
              <ButtonWraper>
                <StyleButton onClick={orderedPlaced}>PLACE ORDER</StyleButton>
              </ButtonWraper>
            </LeftComponent>
            <Grid item lg={3} md={3} sm ={12} xs={12}>
                <TotalView cartItems={cartItems}/>
            </Grid>
        </Container>
        :
        <Emptycart />
      }
    </>
  )
}

export default Cart
