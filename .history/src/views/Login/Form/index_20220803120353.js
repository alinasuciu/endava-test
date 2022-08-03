import InputPasswordComponent from '../../components/InputPasswordComponent';
import InputTextComponent from '../../components/InputTextComponent';

export default function LoginForm() {
    return (
        <div className="login-form">
            <InputTextComponent name="name" id="user" label="Username"/>
            <InputPasswordComponent />
        </div>
    )
}