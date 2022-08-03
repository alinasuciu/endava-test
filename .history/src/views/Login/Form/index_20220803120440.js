import InputPasswordComponent from '../../components/InputPasswordComponent';
import InputTextComponent from '../../components/InputTextComponent';

export default function LoginForm() {
    return (
        <div className="login-form">
            <InputTextComponent name="name" id="login-user" label="Username" required={true} />
            <InputPasswordComponent name="pass" id="login-pass" label="Password" required={true}/>
        </div>
    )
}