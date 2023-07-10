import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Components = styled(Box)`
  margin-top:10px;
  background:#ffffff;
`

const Deals = styled(Box)`
  padding:15px 20px;
  display:flex;
`
const Timer = styled(Box)`
  display:flex;
  margin-left:10px;
  align-items:center;
  color:#7f7f7f;
`
const DealText = styled(Typography)`
  font-size:22px;
  font-weight:600;
  line-height:32px;
  margin-right:20px;

`
const ViewallButton = styled(Button)`
  margin-left:auto;
  background-color:#2874f0;
  font-size:13px;
  border-radious:2px;
  font-weight:600;
`
const Text = styled(Typography)`
  font-size:14px;
  margin-top:5px;
`
const Images = styled('img')({
  width:'auto',
  height:150
})
const Slide = ({products,title,timer}) => {
  const timerUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  

  const renderer = ({hours,minutes,seconds})=>{
      return <Box variant='span'>{hours} : {minutes} : {seconds} Left</Box>
  }

  return (
    <Components>
            <Deals>
                <DealText>{title}</DealText>
                {
                  timer &&
                    <Timer>
                      <img src={timerUrl} alt="timerImage" style={{width:24}} />
                      <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
                    </Timer>
                }
                
                <ViewallButton variant='contained' color='primary'>View All</ViewallButton>
            </Deals>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                centerMode = {true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
            {
                products.map((products)=>(
                  <Link to={`product/${products.id}`} style={{textDecoration:'none',color:'inherit'}}>
                  <Box textAlign='center' style={{padding:'25px 15px'}}>
                    <Images src={products.image} alt="products" />
                    <Text style={{fontWeight:600}}>{products.title}</Text>
                    <Text>
                      <Box component='span'>{products.rating.rate}★</Box>
                    </Text>
                    
                    <Text style={{color:'green'}}>₹{products.price}</Text>
                  </Box>
                  </Link>
                ))
            }
            </Carousel>
    </Components>
  )
}

export default Slide
