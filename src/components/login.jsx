import React, {useState,useEffect} from "react";
import axios from "axios";

import video from "../assests/hacking_bgr.mp4";
const Login = () => {
    const [username,SetUsername]=useState();
    const [password,SetPassword]=useState();

    useEffect=()=>
    {
        axios.post(baseurl)
        .then()
    }
    return (
        <div>
            <div class='container'>
                <div class='overlay' >
                    {/* <div class="matrix">
                        <h1>01001ｱ0101ｹｶ010101</h1>
                    </div>
                    <div class="matrix">
                        <h1>01001ｱ0101ｹｶ010101</h1>
                    </div>
                    <div class="matrix">
                        <h1>01001ｱ0101ｹｶ010101</h1>
                    </div>
                    <div class="matrix">
                        <h1>01001ｱ0101ｹｶ010101</h1>
                    </div>
                    <div class="matrix">
                        <h1>01001ｱ0101ｹｶ010101</h1>
                    </div>
                    <div class="matrix">
                        <h1>01001ｱ0101ｹｶ010101</h1>
                    </div> */}
                    <video src={video} autoPlay loop muted />
                </div>
                <div class='log-form'>
                    <form action='#'>
                        <h1>LOGIN</h1>
                        <label for='username'>USERNAME</label>
                        <input type='text' name='username' class='form-input' />
                        <label for='password'>PASSWORD</label>
                        <input type='password' name='password' class='form-input' />
                        <input type='submit' value='LOG IN' id='form-submit' />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;