import React, { useState, useEffect } from "react";
import InputPasswordComponent from "../../../components/InputPasswordComponent";
import InputTextComponent from "../../../components/InputTextComponent";
import Button from "../../../components/Button";
import { useAuth } from "../../../common/hooks";

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { isLoggin, onLogin } = useAuth();

  useEffect(() => {
    setPassword('');
    setUsername('');
  }, [isLoggin]);

  return (
    <div className="login-form">
      <InputTextComponent
        name="name"
        id="login-user"
        onChange={setUsername}
        label="Username"
        required={true}
        value={username}
      />
      <InputPasswordComponent
        name="pass"
        id="login-pass"
        onChange={setPassword}
        label="Password"
        required={true}
        value={password}
      />
      <Button type="button" onClick={() => onLogin(username, password)}>
        Login
      </Button>
    </div>
  );
}