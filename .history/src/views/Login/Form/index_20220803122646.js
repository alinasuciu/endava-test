import React, { useState } from 'react';
import InputPasswordComponent from '../../../components/InputPasswordComponent';
import InputTextComponent from '../../../components/InputTextComponent';
import Button from '../../../components/Button';

export default function LoginForm() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        console.log(password, username)
    }
    return (
        <div className="login-form">
            <InputTextComponent name="name" id="login-user" onChange={setUsername} label="Username" required={true} />
            <InputPasswordComponent name="pass" id="login-pass" onChange={setPassword} label="Password" required={true}/>
            <Button type="submit" onClick={handleClick}>Login</Button>
        </div>
    )
}