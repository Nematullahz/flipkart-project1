import * as actionType from '../constaints/cartContaints';
import axios from 'axios';
let url = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";
export const addToCart = (id,quantity)=>async (dispatch)=>{
    try{
        const {data} =await axios.get(`${url}/${id}`);
        dispatch({type:actionType.ADD_TO_CART,payload:{...data,quantity}})

    }catch(err){
        dispatch({type:actionType.ADD_TO_CART_ERR,payload:err.message})
    }
}


export const removeToCart = (id)=>(dispatch)=>{
   dispatch({type:actionType.REMOVE_FROM_CART,payload:id});
}