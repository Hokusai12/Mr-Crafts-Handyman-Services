import { useState } from 'react';
import {AppViews} from '../App';

import LoginForm from './LoginForm';

function LoginPage({updateView}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className='container'>
            <h1>This is the Login Page</h1>
            <LoginForm 
                updateUsername={setUsername}
                updatePassword={setPassword}    
            />
            <p>Username: {username}</p>
            <p>Password: {password}</p>
            <button onClick={ () => { updateView(AppViews.LandingPage) }}>LandingPage</button>
        </div>
    );
}
export default LoginPage;