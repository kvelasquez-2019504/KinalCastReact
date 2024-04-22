import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
	emailValidationMessage,
	validateEmail,
	validatePassword,
	validatePasswordMessage,
} from "../shared/validator";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
	const { login, isLoading } = useLogin();

	const [formState, setFormState] = useState({
		email: {
			value: "",
			isValid: false,
			showError: false,
		},
		password: {
			value: "",
			isValid: false,
			showError: false,
		}
	});
	//manejar el estado del formulario
	const handleInputValueChange = (value, field) => {
		setFormState((prevState) => ({
			//que tome todo lo que tiene
			...prevState,
			[field]: {
				...prevState[field],
				value,
			}
		}));
	};

	const handleInputValidationOnBlur = (value, field) => {
		let isValid = false;
		switch (field) {
			case "email":
				isValid = validateEmail(value);
				break;
			case "password":
				isValid = validatePassword(value);
				break;
			default:
				break;
		}
		setFormState((prevState) => ({
			//que tome todo lo que tiene
			...prevState,
			[field]: {
				...prevState[field],
				isValid, //si esto es verdadero, cumple los requisitos, por lo tanto el error es verdadero
				showError: !isValid, //por esto se niega
			},
		}));
	};

	const handleLogin = (event) => {
		event.preventDefault();
		login(formState.email.value, formState.password.value);
	};
	//si la data esta cargando el boton este habilitado
	const isSubmitButtonDisabled = isLoading || !formState.email.isValid || !formState.password.isValid;

	return (
		<div className="login-container">
			<Logo text={'Login Kinal Cast'}/>
			<form className="auth-form">
				<Input
					field='email'
					label='Email'
					value={formState.email.value}
					onChangeHandler={handleInputValueChange}
					type='text'
					onBlurHandler={handleInputValidationOnBlur}
					showErrorMessage={formState.email.showError}
					validationMessage={emailValidationMessage}
				/>
				<Input
					field='password'
					label='Password'
					value={formState.password.value}
					onChangeHandler={handleInputValueChange}
					type='password'
					onBlurHandler={handleInputValidationOnBlur}
					showErrorMessage={formState.password.showError}
					validationMessage={validatePasswordMessage}
				/>
				<button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
					Log in
				</button>
			</form>
			<span
				onClick={switchAuthHandler}
				className="auth-form-switch-label"
			>
				Registrate Aqui
			</span>
		</div>
	);
};
