import React, { useState } from 'react';
import InputPasswordComponent from '../../../components/InputPasswordComponent';
import InputTextComponent from '../../../components/InputTextComponent';
import Button from '../../../components/Button';

export default function LoginForm() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
        <div className="login-form">
            <InputTextComponent name="name" id="login-user" label="Username" required={true} />
            <InputPasswordComponent name="pass" id="login-pass" label="Password" required={true}/>
            <Button type="submit" onClick="">Login</Button>
        </div>
    )
}