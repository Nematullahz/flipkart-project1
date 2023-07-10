import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'
import { Box, Typography,Grid,styled } from '@mui/material';

import { getProductDetails } from '../../redux/action/productAction';
import React from 'react'
import ActionItems from './ActionItems';
import Productdetails from './Productdetails';

const Components = styled(Box)`
  background-color:#f0f0f0;
`
const Container = styled(Grid)`
  background-color:#ffffff;
`
const RightContainer = styled(Grid)`
  margin-top:55px;
`
const DetailsView = () => {
    const dispatch = useDispatch();
   const {loading,product}=  useSelector(state=>state.getproductDetails)
    const {id} = useParams();
    useEffect(()=>{
        if(product && id !== product.id){
          dispatch(getProductDetails(id))
        }
            
    },[dispatch,id])
    console.log(product);
  return (
    <Components>
        {
            product && Object.keys(product).length &&
            <Container container>
                <Grid item lg={4} sm={8} xs={12} md={4}>
                  <ActionItems product={product}/>
                </Grid>
                <RightContainer item lg={4} sm={8} xs={12} md={4}>
                  <Productdetails product={product}/>
                </RightContainer>
            </Container>

        } 
    </Components>
  )
}

export default DetailsView
