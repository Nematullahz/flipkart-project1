

import React, { useState,useContext } from 'react'
import { Box, Button, Dialog, TextField, Typography ,styled} from '@mui/material'
import { DataContext } from '../../context/Dataprovider'

const Components = styled(Box)`
    height:70vh;
    width:90vh;
`
const Image = styled(Box)`
    background:#2874f0 url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png") no-repeat center 85%;
    height:82%;
    width:28%;
    padding:45px 35px;
    
    & > p, & > h5{
        color:#ffffff;
        font-weight:600;
    }
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    & > div, &>button, &>p{
        margin-top:20px;
    }
`

const LoginButton = styled(Button)`
    text-transform:none;
    background:#fb641b;
    color:#fff;
    height:48px;
    border-radious: 2px;
`
const RequestOpt = styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radious: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`
const Account = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`
const accountinitailValues={
    login: {
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders,whishlist and Recommendations'
    },
    signup: {
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"sign up with your mobile number to get started"
    }
}
const userSignUp = {
    fname:'',
    lname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const userInputvalue = {
    username:'',
    password:'',
}
const LoginDialog = ({open,setOpen}) => {
    const [account, toggleAccount] = useState(accountinitailValues.login);
    const [signup,setSignup] = useState(userSignUp);
    const [login,setLogin] = useState(userInputvalue);
    const [error,setError] = useState(false);
    console.log(signup);

    const {setAccount} = useContext(DataContext);

    const handlechange =(e)=>{
        setSignup({...signup, [e.target.name]:e.target.value})
    }

    const toggleSignUp = ()=>{
        toggleAccount(accountinitailValues.signup);
    }
    const closeDialog = ()=>{
        setOpen(false);
        toggleAccount(accountinitailValues.login);
    }

    const submitUser = ()=>{
        localStorage.setItem("user",JSON.stringify(signup.username));
        localStorage.setItem("pass",JSON.stringify(signup.password));
        closeDialog();
        
        setAccount(signup.username);
    }
    const onInputchange = (e)=>{
        setLogin({...login, [e.target.name]:e.target.value});
    }

    const loginuser = ()=>{
        const username = JSON.parse(localStorage.getItem("user"));
        const password = JSON.parse(localStorage.getItem("pass"));
        if(username===login.username && password === login.password){
            closeDialog();
            setAccount(username);
            setError(false);
        }else{
            setError(true);
        }
    }

  return (
    <Dialog open={open} onClose={closeDialog} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Components>
            <Box style={{display:"flex", height:'100%'}}>
                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                </Image>
                {
                    account.view=== 'login'? 
                    <Wrapper>
                    <TextField variant='standard' onChange={(e)=>onInputchange(e)} name='username' label='Enter username'/>
                    <TextField variant='standard' onChange={(e)=>onInputchange(e)} name='password' label='Enter password'/>
                    <Text>By containing, you agree to flipkart's Terms of use and privacy policy</Text>
                    <LoginButton onClick={()=>loginuser()}>Login</LoginButton>
                    {
                        error ? <Typography style={{color:'red'}}>Invalid username or password</Typography>:null
                    }
                    <Typography style={{textAlign:'center'}}>Or</Typography>
                    <RequestOpt>Request OTP</RequestOpt>
                    <Account onClick={()=>toggleSignUp()}>New to flipkart? Create an account</Account>
                    </Wrapper>
                    :
                    <Wrapper>
                    <TextField variant='standard' onChange={(e)=>handlechange(e)} name='fname' label='Enter Firstname'/>
                    
                    <TextField variant='standard' onChange={(e)=>handlechange(e)} name='lname'label='Enter Lastname'/>
                    <TextField variant='standard' onChange={(e)=>handlechange(e)} name='username'label='Enter Username'/>
                    <TextField variant='standard' onChange={(e)=>handlechange(e)} name='email'label='Enter Email'/>
                    <TextField variant='standard' onChange={(e)=>handlechange(e)} name='password'label='Enter Password'/>
                    <TextField variant='standard' onChange={(e)=>handlechange(e)} name='phone'label='Enter Phone'/>
                    
                    <LoginButton onClick={()=>submitUser()}>Continue</LoginButton>
                    
                    </Wrapper>
                }
                
            </Box>
        </Components>
    </Dialog>
  )
}

export default LoginDialog
