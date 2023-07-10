

import {Box,Button,Typography,styled}  from '@mui/material';
import React from 'react'
import { addEllipsis } from '../../utils/Common-utils';
import ButtonComponets from './ButtonComponets';
import { useDispatch } from 'react-redux';
import { removeToCart } from '../../redux/action/cardAction';

const Components = styled(Box)`
    display:flex;
    border-top:1px solid #f0f0f0;
    background:#fff;
`
const LeftComponents = styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
`
const SmallText = styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:10px;
`
const Remove = styled(Button)`
    margin-top:20px;
    font-size:18px;
    font-weight:600;
    color:#000;
`
const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const dispatch = useDispatch();
    const removefromcart = (id)=>{
        dispatch(removeToCart(id));
    }
  return (
    <Components>
        <LeftComponents>
            <img src={item.image} alt="photo" style={{width:110,height:110}} />
            <ButtonComponets />
        </LeftComponents>
        <Box style={{margin:20}}>
            <Typography>{addEllipsis(item.title)}</Typography>
            <SmallText>Seller:RetailNet 
                <Box component='span'><img src={fassured} alt="fassured" style={{width:50,marginLeft:10}}/></Box>
            </SmallText>
            <Typography style={{margin:'20px 0'}}>
                <Box component='span' style={{fontWeight:600,fontSize:18}}>₹{item.price}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color:'#878787'}}><strike>₹600</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color:'#388e3c'}}>20%</Box>
            </Typography>
            <Remove onClick={()=>removefromcart(item.id)}>REMOVE</Remove>
        </Box>
    </Components>
  )
}

export default CartItem
