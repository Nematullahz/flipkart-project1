
import {Box,Table,TableBody,TableCell,TableRow,Typography,styled} from '@mui/material';
import {LocalOffer as Batch} from '@mui/icons-material';

import React from 'react'
const SmallText = styled(Box)`
    font-size:12px;
    vertical-align:baseline;
    & >p{
        font-size:12px
    }
`

const StyleBatch = styled(Batch)`
    margin-right:10px;
    color:#00cc00;
    font-size:15px
`
const ColumnText = styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    & >td{
        font-size:14px;
        margine-top:10px;
        border:none;
    }
`
const Productdetails = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  return (
    <>
      <Typography>{product.title}</Typography>
        <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>
             {product.rating.rate} Rating and {product.rating.count} Reviews
            <Box component="span"><img src={fassured} alt="logo" style={{width:77,marginLeft:20}} /></Box>
        </Typography>
        <Typography>
             <Box component='span' style={{fontSize:28}}>₹{product.price}</Box>&nbsp;&nbsp;&nbsp;
             <Box component='span' style={{color:'#878787'}}><strike>₹600</strike></Box>&nbsp;&nbsp;&nbsp;
             <Box component='span' style={{color:'#388e3c'}}>20%</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyleBatch />Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999T&C</Typography>
            <Typography><StyleBatch />Get 5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            <Typography><StyleBatch />Get extra 10% off (price inclusive of cashback/coupon)T&C</Typography>
            {/* <Typography><Batch />Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C</Typography>
            <Typography><Batch />Get Extra 10% off on Men's shoes by PUMA, NIKE & More. Offer Auto Applied. T&C Know More</Typography>
            <Typography><Batch />Purchase now & get 1 surprise cashback coupon in FutureKnow More</Typography> */}
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Waranty</TableCell>
                    <TableCell >No waranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Seller</TableCell>
                    <TableCell>
                        <Box component='span' style={{color:'#2874f0'}}>SuperComNet</Box>
                        <Typography>GST invoice Available</Typography>
                        <Typography style={{fontSize:14}}>View More seller Starting From {product.price}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                        <img src={adURL} alt='img' />
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Description</TableCell>
                    <TableCell >{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>
    </>
  )
}

export default Productdetails
