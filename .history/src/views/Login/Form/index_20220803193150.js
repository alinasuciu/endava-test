import React, { useState } from "react";
import InputPasswordComponent from "../../../components/InputPasswordComponent";
import InputTextComponent from "../../../components/InputTextComponent";
import Button from "../../../components/Button";
import { useAuth } from "../../../common/hooks";

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { isLoggin, onLogin, onLogout } = useAuth();

  return (
    <div className="login-form">
      <InputTextComponent
        name="name"
        id="login-user"
        onChange={setUsername}
        label="Username"
        required={true}
      />
      <InputPasswordComponent
        name="pass"
        id="login-pass"
        onChange={setPassword}
        label="Password"
        required={true}
      />
        <Button type="button" onClick={() => console.log('hhhhhh')}>
          Login
        </Button>
      {/* {isLoggin ? (
      
      ) : (
        <Button type="button" onClick={() => onLogout}>
          Login
        </Button>
      )} */}
    </div>
  );
}
