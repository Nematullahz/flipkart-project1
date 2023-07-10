

import {Box, Typography,styled} from '@mui/material';
import React, { useEffect, useState } from 'react'

const Header = styled(Box)`
  padding:15px 24px;
  background:#fff;
  border-bottom: 1px solid #f0f0f0;
`
const Heading = styled(Typography)`
  color:#878787;
`
const Container = styled(Box)`
  padding:15px 24px;
  background:#fff;
  & > p{
    margin-bottom:20px;
    font-size:12px;
  }
  & >h6{
    margin-bottom:20px;
    
  }
`
const Price = styled(Box)`
  float:right;
`
const Discount = styled(Typography)`
  color:green;
  font-weight:500;
`

const TotalView = ({cartItems}) => {
  const [price,setPrice] = useState(0);
  const [discount,setDiscount] = useState(0);

  useEffect(()=>{
    TotalAmount();
  },[cartItems])

  const TotalAmount = ()=>{
    let price=0,discount = 0;
    cartItems.map(item=>{
      price+= item.price
    
  })
    discount = 5*cartItems.length;
    setPrice(price);
    setDiscount(discount);
  }
  return (
   <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>Price ({cartItems?.length} item)
          <Price component='span'>₹{price}</Price>
        </Typography>
        <Typography>Discount
        <Price component='span'>₹{discount}</Price>
        </Typography>
        <Typography>Delivery Charges
        <Price component='span' style={{color:'green'}}>Free</Price>
        </Typography>
        <Typography variant="h6">Total Amount
        <Price component='span'>₹{price-discount}</Price>
        </Typography>
        <Discount>You will save ₹{discount} on this order</Discount>
      </Container>
   </Box>
  )
}

export default TotalView
