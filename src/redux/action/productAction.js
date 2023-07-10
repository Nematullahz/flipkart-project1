import axios from "axios";
import * as actionType from "../constaints/productConstants";

let url = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";
export const getProducts =()=> async (dispatch)=>{
    try{
        const {data} =await axios.get(url);
        // console.log(response);
        dispatch({type:actionType.GET_PRODUCT_SUCCESS,payload:data})
    }catch(err){
        dispatch({type:actionType.GET_PRODUCT_FAILS, payload:err.message})
    }
}

export const getProductDetails = (id)=>async (dispatch)=>{
    try{
        dispatch({type:actionType.GET_PRODUCT_DETAILS_REQUEST});
        const {data} =await axios.get(`${url}/${id}`);
        dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
    }catch(errr){
        dispatch({type:actionType.GET_PRODUCT_DETAILS_FAILS,payload:errr.message})
    }
}