import "./sign-in.css"
import loginVector from "./img/vector.webp";
import { Fragment } from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Login = () => {

  return (
     <Fragment>
          <div className="auth-card">
        <div className="image-part">
         <img src={loginVector} alt=""/>
       </div>
       <div className="main-part">
        <Typography class="heading">
          Welcome to Panorama, <br/> Sign In to Continue.
        </Typography>
        <Typography class="black fs-12 py-10">Don't have an account? <span className="secondary-class">Create a account</span>
         <br/> It take less than a minute.</Typography>
        

        <div className="form-wrapper">
          <div className="form-group py-25">
            <label for="email">Email</label>
            <TextField id="outlined-basic" 
            InputProps={{
                    sx: {
                      borderRadius: 0,
                      borderColor:"#000000",
                    },
                  }} placeholder="Enter your email" variant="outlined" size="small"/>
          </div>

          <div className="form-group pb-5">
            <label for="password">Password</label>
            <TextField id="outlined-basic" 
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityIcon />
                    </InputAdornment>
                  ),
                    sx: {
                      borderRadius:0,
                      background:'#b8b8b8',
                      borderColor:'#b8b8b8',
                    },
                  }}
                  
                   placeholder="Enter password" variant="outlined" size="small"/>
          </div>

             

         <p className="secondary-class text-center cursor-pointer">Forgot Password?</p>

          <button className="primary-button my-35 cursor-pointer">Sign in</button>
          <button className="google-button cursor-pointer">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_206_1170)">
<path d="M27.9851 14.7713C27.9851 13.5832 27.8899 12.7162 27.6837 11.817H14.2788V17.1796H22.1472C21.9886 18.5123 21.132 20.5193 19.2283 21.8679L19.2016 22.0474L23.44 25.3706L23.7336 25.4002C26.4304 22.8794 27.9851 19.1705 27.9851 14.7713Z" fill="#4285F4"/>
<path d="M14.279 28.9004C18.1338 28.9004 21.37 27.6159 23.7338 25.4002L19.2284 21.8679C18.0228 22.7189 16.4047 23.3129 14.279 23.3129C10.5034 23.3129 7.29893 20.7922 6.15662 17.3081L5.98919 17.3225L1.58205 20.7745L1.52441 20.9367C3.87223 25.657 8.69485 28.9004 14.279 28.9004Z" fill="#34A853"/>
<path d="M6.15656 17.3081C5.85516 16.409 5.68072 15.4456 5.68072 14.4502C5.68072 13.4547 5.85516 12.4914 6.14071 11.5922L6.13272 11.4008L1.67036 7.89331L1.52435 7.9636C0.556705 9.92243 0.00146484 12.1221 0.00146484 14.4502C0.00146484 16.7783 0.556705 18.9778 1.52435 20.9367L6.15656 17.3081Z" fill="#FBBC05"/>
<path d="M14.279 5.58737C16.9599 5.58737 18.7683 6.75943 19.7995 7.7389L23.8289 3.75705C21.3542 1.42897 18.1338 0 14.279 0C8.69485 0 3.87223 3.24324 1.52441 7.9636L6.14077 11.5923C7.29893 8.10816 10.5034 5.58737 14.279 5.58737Z" fill="#EB4335"/>
</g>
<defs>
<clipPath id="clip0_206_1170">
<rect width="28" height="29" fill="white"/>
</clipPath>
</defs>
</svg>
<span>Sign in with Google</span></button>

          {/* <div className="signup-info-wrapper">
            <p className="light-gray fs-14 text-center py-25">Don't have an account? <span className="secondary-class">Sign up</span></p>
          </div> */}
        </div>
      </div>
      
    </div>
      </Fragment >)
};

export default Login;