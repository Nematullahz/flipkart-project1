import Search from './Search'
import MenuIcon from '@mui/icons-material/Menu';

import {AppBar,Toolbar,Typography,styled,Box, IconButton, Drawer, List, ListItem} from '@mui/material';
import React, { useState } from 'react'
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
const StyleHeader = styled(AppBar)`
    background:#2874f0;
    height:55px;
`
const Components = styled(Box)`
    margin-left:12%;
    width:120px;
    line-height:0;
    text-decoration:none;
    color:inherit;
`
const SubHeading = styled(Typography)`
    font-size:11px;
    font-style:italic;
`
const PlusImg = styled("img")({
    width:10,
    height:10,
    marginLeft:2
})
const CustomButtonWrapper = styled(Box)(({theme})=>({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))
    
const MenuButton = styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block',
    }
}))

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    const list = ()=>{
        
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButton/>
                </ListItem>
            </List>
        </Box>
    }
    
  return (
   <StyleHeader>
        <Toolbar style={{minHeight:"55px"}}>
            <MenuButton color='inherit' onClick={handleOpen}>
                <MenuIcon/>
            </MenuButton>

            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>

            <Components>
                <Link to='/'>
               <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" style={{width:75}}/>
               </Link>
               <Box style={{display:"flex"}}>
                  <SubHeading>Explore &nbsp;
                    <Box component='span' style={{color:"#ffe500"}}>plus</Box> 
                    
                  </SubHeading>
                  <PlusImg src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="pic" />
               </Box>
            </Components>
            <Search/>
            <CustomButtonWrapper>
                <CustomButton />
            </CustomButtonWrapper>
        </Toolbar>
   </StyleHeader>
  )
}

export default Header
