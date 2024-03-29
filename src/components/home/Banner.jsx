
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import {bannerData} from '../../constants/Data'

import { styled } from '@mui/material';


const Image = styled('img')(({theme})=>({
    width:"100%",
    height:"280px",
  [theme.breakpoints.down('md')]:{
    objectFit:'cover',
    height:180,
  }
    
    
}));

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
  return (
    <Carousel
    responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    >
        {
           bannerData.map((data)=>(
             <Image key={data.id} src={data.url} alt="Banner" />
           )) 
        }
    </Carousel>
  )
}

export default Banner
