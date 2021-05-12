import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions/userActions';


const Login = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const dispatch = useDispatch();

    const handleUserLogin = (e) => {
        e.preventDefault();
        dispatch(userLogin(emailInput, passwordInput));
    }    

    return ( 
        <form className="login_container" action="">
            <input 
                type="email" 
                name="email" 
                id=""
                placeholder="Email" 
                value={emailInput} 
                onChange={(e) => setEmailInput(e.target.value)}
            />
            <input 
                type="password" 
                name="password"
                id="" 
                value={passwordInput} 
                placeholder="Password"
                onChange={(e) => setPasswordInput(e.target.value)} 
            />
            <div>
                    <input
                        type="submit"
                        value="Login"
                        onClick={ (e) => handleUserLogin(e)}
                    />
                </div>
        </form>
    );
}

export default Login;