import "./sign-in.css"
import loginVector from "./img/vector.webp";
import { Fragment, useState } from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [inputType, setInputType]=useState("password")

  let changeVisibilityHandler = () => {
    if (isShowPassword) {
      setIsShowPassword(false);
      setInputType("text");
    } else {
      setIsShowPassword(true)
      setInputType("password");
    }
    
  };
  return (
     <Fragment>
        <div className="auth-card">
            <div className="image-part">
                <img src={loginVector} alt=""/>
            </div>
        <div className="main-part">
            <Typography class="heading">Welcome to Panorama, <br/> Sign In to Continue.</Typography>
            <Typography class="black fs-12 py-10">Don't have an account?{' '}
            <span className="secondary-class">Create a account</span>
            <br/> It take less than a minute.
            </Typography>
        <div className="form-wrapper">
            <div className="form-group py-25">
                <label for="email">Email</label>
                <TextField 
                sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'black',
                      },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                    borderRadius: 0,
                },}}
                placeholder="Enter your email"  size="small"/>
        </div>

          <div className="form-group pb-5">
            <label for="password">Password</label>
            <TextField id="outlined-basic" 
              type={inputType}
              sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        border: 'none',
                      },
                    borderRadius: 0,
                    background:'#F7F7F7',
                  },
              }}
            InputProps={{
                endAdornment: (
                    <InputAdornment className="cursor-pointer" position="end">
                      {isShowPassword ? <VisibilityIcon onClick={changeVisibilityHandler} /> : <VisibilityOffOutlinedIcon onClick={changeVisibilityHandler}/>}
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter password" variant="outlined" size="small"/>
          </div>
         <p className="secondary-class text-center cursor-pointer">Forgot Password?</p>
          <button className="primary-button my-35 cursor-pointer">Sign In</button>
          <button className="google-button cursor-pointer">
          <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_206_1170)">
                <path d="M22.9878 12.2245C22.9878 11.2413 22.9095 10.5237 22.7402 9.77963H11.729V14.2176H18.1923C18.0621 15.3205 17.3584 16.9815 15.7946 18.0976L15.7727 18.2461L19.2543 20.9963L19.4955 21.0209C21.7107 18.9347 22.9878 15.8653 22.9878 12.2245Z" fill="#4285F4"/>
                <path d="M11.7291 23.9176C14.8956 23.9176 17.5539 22.8545 19.4956 21.0209L15.7948 18.0976C14.8045 18.8018 13.4753 19.2934 11.7291 19.2934C8.62779 19.2934 5.99555 17.2074 5.05723 14.324L4.91969 14.3359L1.29954 17.1927L1.2522 17.3269C3.18076 21.2334 7.1422 23.9176 11.7291 23.9176Z" fill="#34A853"/>
                <path d="M5.05719 14.324C4.80961 13.5799 4.66633 12.7826 4.66633 11.9588C4.66633 11.1349 4.80961 10.3377 5.04417 9.5936L5.03761 9.43513L1.37209 6.53241L1.25217 6.59058C0.45731 8.21168 0.0012207 10.0321 0.0012207 11.9588C0.0012207 13.8855 0.45731 15.7058 1.25217 17.3269L5.05719 14.324Z" fill="#FBBC05"/>
                <path d="M11.7291 4.62403C13.9313 4.62403 15.4169 5.59401 16.2639 6.40461L19.5738 3.10928C17.541 1.1826 14.8956 0 11.7291 0C7.1422 0 3.18076 2.68406 1.2522 6.59056L5.0442 9.59359C5.99555 6.7102 8.62779 4.62403 11.7291 4.62403Z" fill="#EB4335"/>
                </g>
                <defs>
                    <clipPath id="clip0_206_1170">
                        <rect width="23" height="24" fill="white"/>
                        </clipPath>
                        </defs>
            </svg>
        <span className="ml-10">Sign In with Google</span></button> 
        </div>
      </div>
    </div>
</Fragment >)
};

export default Login;