import React from 'react'
import "../App.css"
import loginbg from "../assets/pictures/loginBg.jpg"
import video from "../assets/videos/northern_ai.mp4"

function Login() {
  return (
<>
    <div className="bg">
        <img src={loginbg} alt="bg" />
    </div>
    <div className="loginPage">
        <div className="leftSection">
            <h1 className='loginNai'>NORTHERN AI</h1>
            <h3>Login to your account</h3>
            <video src={video} autoPlay loop muted className='loginVideo'></video>
        </div>
        <div className="rightSection">
            <h2 className='rightSectionLogin'>LOGIN</h2>
            <label for="Email">Email</label><br/>
            <input type="email" name="email" id="email" placeholder='Email address' />
            <label for="Password">Password</label><br/>
            <input type="password" name="password" id="password" placeholder='Password' />
            <div className="forgot">
                <input type="checkbox" name="remindMe" id="remind"/>Remind me
                <a href="$">Forgot password?</a>
            </div>
            <button className='loginbtn'>Login now</button><br/><br/>
            <div className="socialButton">
                <div className="google">
                    <img src="" alt="" />
                    <h4>sign-in with Google</h4>
                </div>
                <div className="linkedin">
                    <img src="" alt="" />
                    <h4>sign-in with LinkedIn</h4>
                </div>
                <div className="twitter">
                    <img src="" alt="" />
                    <h4>sign-in with Twitter</h4>
                </div>
                <div className="facebook">
                    <img src="" alt="" />
                    <h4>sign-in with Facebook</h4>
                </div>
            </div>
            <div className="DontAccount">
                Don't have an account? <span>Join for free</span>
            </div>
        </div>
    </div>
    </>
  );
}

export default Login;
