import React, { useState } from 'react';
import InputPasswordComponent from '../../../components/InputPasswordComponent';
import InputTextComponent from '../../../components/InputTextComponent';
import Button from '../../../components/Button';

export default function LoginForm({ onClick }) {
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    return (
        <div className="login-form">
            <InputTextComponent name="name" id="login-user" onChange={setUsername} label="Username" required={true} />
            <InputPasswordComponent name="pass" id="login-pass" onChange={setPassword} label="Password" required={true}/>
            <Button type="button" onClick={() => onClick(password, username)}>Login</Button>
        </div>
    )
}