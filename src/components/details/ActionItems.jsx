

import {Box,Button,styled} from '@mui/material';
import React, { useState } from 'react';
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/cardAction';

const LeftContainer = styled(Box)(({theme})=>({
  minWidth:'40%',
  padding:'40px 0 0 80px',
  [theme.breakpoints.down('md')]:{
    padding:'20px 40px'
  }
}))
    
    
    

const Image = styled('img')({
  padding:'15px',
  height:'300px'
  
})

const StyledButton = styled(Button)(({theme})=>({
  width:'46%',
  height:'50px',
  borderRadius:'2px',
  [theme.breakpoints.down('lg')]:{
    with:'46%'
  }
}))
  


const ActionItems = ({product}) => {
  const [quantity,setQuantity] = useState(1);
  const {id} = product;
  const dispatch = useDispatch();
  const navigate = useNavigate() 
  const addItemToCart = ()=>{
      dispatch(addToCart(id,quantity))
      navigate('/cart');
  }

  return (
    <LeftContainer>
      <Box style={{padding:'15px 20px',border:'1px solid #f0f0f0',width:'85%'}}>
          <Image src={product.image} alt="image" />
      </Box>
      <StyledButton variant='contained' onClick={()=>addItemToCart()} style={{marginRight:10,background:'#ff9f00'}}><Cart/>Add to Card</StyledButton>
      <StyledButton variant='contained' style={{background:'#fb541b'}}><Flash />Buy Now</StyledButton>

    </LeftContainer>
  )
}

export default ActionItems


