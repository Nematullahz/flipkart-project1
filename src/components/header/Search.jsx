
import styled from '@emotion/styled';
import {Box, InputBase, ListItem,List} from '@mui/material';
import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getProducts} from '../../redux/action/productAction'
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background:#fff;
    width:38%;
    margin-left:10px;
    font-size:unset;
    display:flex;
    
`

const InputSearchBox = styled(InputBase)`
   padding-left:20px;
   width:100%;
   border-radius:2px;
`
const SearchIconsWraper = styled(Box)`
  color:blue;
  padding:5px;
`
const ListWraper = styled(List)`
  position:absolute;
  background:#ffffff;
  color:#000;
  margin-top:36px;
  cursor:pointer;
`
const Search = () => {
  const [text,setText] = useState('');
  const {products} = useSelector(state=>state.getproducts);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
   const getText = (text)=>{
      setText(text);
  }
  return (
    <SearchContainer>
        <InputSearchBox
         placeholder='Search for products, brands and more' 
         onChange={(e)=>getText(e.target.value)}
         value={text}
         />
         <SearchIconsWraper>
            <i className="fa-solid fa-magnifying-glass"></i>
          </SearchIconsWraper>
          {
            text && 
            <ListWraper>
              {
                products.filter(product=>product.title.toLowerCase().includes(text.toLowerCase())).map(product=>(
                  <ListItem>
                    <Link
                     to={`/product/${product.id}`}
                     onClick={()=>setText('')}
                     style={{textDecoration:'none', color:'inherit'}}
                    >
                    {product.title}
                    </Link>
                  </ListItem>
                ))
              }
            </ListWraper>
          }

    </SearchContainer>
    
  )
}

export default Search
