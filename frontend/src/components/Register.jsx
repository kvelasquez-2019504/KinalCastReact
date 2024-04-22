import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
	validateUsername,
	validateUsernameMessage,
	emailValidationMessage,
	validateEmail,
	validatePassword,
	validatePasswordMessage,
	validateConfirmPassword,
	validateConfirmationMessage
} from "../shared/validator";
import { useRegister } from "../shared/hooks";

export const Register = ({ switchAuthHandler }) => {
	const { register, isLoading } = useRegister();

	const [formState, setFormState] = useState({
		username: {
			value: "",
			isValid: false,
			showError: false,
		},
		email: {
			value: "",
			isValid: false,
			showError: false,
		},
		password: {
			value: "",
			isValid: false,
			showError: false,
		},
		passwordConfirm: {
			value: "",
			isValid: false,
			showError: false,
		},
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
			case "username":
				isValid=validateUsername(value);
				break;
			case "email":
				isValid = validateEmail(value);
				break;
			case "password":
				isValid = validatePassword(value);
				break;
			case "passwordConfirm":
				isValid = validateConfirmPassword(value,formState.password.value);
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

	const handleRegister = (event) => {
		event.preventDefault();
		register(formState.username.value,formState.email.value, formState.password.value);
	};
	//si la data esta cargando el boton este habilitado
	const isSubmitButtonDisabled = isLoading 
	|| !formState.username.isValid 
	|| !formState.email.isValid || !formState.password.isValid || !formState.passwordConfirm.isValid;

	return (
		<div className="login-container">
			<Logo text={'Login Kinal Cast'}/>
			<form className="auth-form">
				<Input
					field='username'
					label='Username'
					value={formState.username.value}
					onChangeHandler={handleInputValueChange}
					type='text'
					onBlurHandler={handleInputValidationOnBlur}
					showErrorMessage={formState.username.showError}
					validationMessage={validateUsernameMessage}
				/>
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
				<Input
					field='passwordConfirm'
					label='Password Confirm'
					value={formState.passwordConfirm.value}
					onChangeHandler={handleInputValueChange}
					type='password'
					onBlurHandler={handleInputValidationOnBlur}
					showErrorMessage={formState.passwordConfirm.showError}
					validationMessage={validateConfirmationMessage}
				/>
				<button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
					Register
				</button>
			</form>
			<span
				onClick={switchAuthHandler}
				className="auth-form-switch-label"
			>
				Tienes una cuenta, inicia sesion
			</span>
		</div>
	);
};
