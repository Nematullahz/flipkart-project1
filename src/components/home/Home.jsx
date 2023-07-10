
import { styled,Box} from '@mui/material'
import React, { useEffect } from 'react'
import Navbar from './Navbar'

import Banner from './Banner'
import { getProducts } from '../../redux/action/productAction';
import {useDispatch,useSelector} from 'react-redux'
import Slide from './Slide';

const Container = styled(Box)`
    padding:15px 5px;
    background:#f2f2f2;
`

const Home = () => {
 const {products} =  useSelector(state=>state.getproducts)
 console.log(products);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getProducts())
  },[dispatch])
  return (
    <>
      <Navbar/>
      <Container>
        <Banner />
        <Slide products={products} title='Deals of the Day'timer={true}/>
        <Slide products={products} title='Top selection' timer={false}/>
        <Slide products={products} title='Discount for you' timer={false}/>
        <Slide products={products} title='Trending offers' timer={false}/>
      </Container>
      
    </>
  )
}

export default Home
