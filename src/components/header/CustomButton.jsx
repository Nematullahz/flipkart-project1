
import styled from '@emotion/styled';
import {Box,Button,Badge, Typography} from '@mui/material';
import React, {useState,useContext} from 'react'
import { DataContext } from '../../context/Dataprovider';
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

const Wrapper = styled(Box)`
    display:flex;
    margin: 0 3% 0 auto;
    & > button, & > p, &>div {
        margin-right:40px;
        font-size:14px;
        
    }
`
const CartContainer = styled(Link)`
    display:flex;
    align-item:ceter;
    text-decoration:none;
    color:inherit;
`
    


    
    

const ButtonComponets = styled(Button)`
    color:#2874f0;
    background:#ffffff;
    text-transform:none;
    padding:5px 40px;
    box-Shadow:none;
    font-weight:600;
    height:32px;
    border-radius:2px;
    margin-left:10px;
`

const CustomButton = () => {
    const [open,setOpen] = useState(false);
    const [count,setCountount] = useState(0);
    const {account,setAccount} = useContext(DataContext);
    const {cartItems} = useSelector(state=>state.cart);
    
    const openDialog = ()=>{
        setOpen(true);
    }

  return (
    <Wrapper>
        {
            account? <Profile account={account} setAccount={setAccount}/> :
            <ButtonComponets variant='contained' onClick = {()=>openDialog()}>Login</ButtonComponets>
        }
        
        <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>

        <CartContainer to='/cart'>
            <Badge badgeContent={cartItems?.length} color='primary'>
                <ShoppingCartIcon />
            </Badge>
            <Typography>Cart</Typography>
        </CartContainer>
        <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButton
