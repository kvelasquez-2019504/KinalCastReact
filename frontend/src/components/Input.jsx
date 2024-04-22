//Los props, reciben props "atributos", que permiten comportarse de manera especifica
//Lo que hago es pedir los props que se escriben entre (),
export const Input = ({
	field,
	label,
	value,
	onChangeHandler,
	type,
	showErrorMessage,
	validationMessage,
	onBlurHandler,
	textarea
}) => {
	const handleValueChange = (event) => {
		//captura del valor y seteo del valor
		onChangeHandler(event.target.value, field);
	};
	const handleInputBlur = (event) => {
		onBlurHandler(event.target.value, field);
	};

	return (
		<>
			<div className="auth-form-label">
				<span>{label}</span>
			</div>
			<div>
				{textarea ? (
					<textarea
						type={type}
						value={value}
						onChange={handleValueChange}
						onBlur={handleInputBlur}
						rows={5}
						style={{ maxWidth: "400px" }}
					/>
				) : (
					<input
						type={type}
						value={value}
						onChange={handleValueChange}
						onBlur={handleInputBlur}
					/>
				)}
                <span className="auth-form-validation-message">
                    {showErrorMessage && validationMessage}
                </span>
			</div>
		</>
	);
};
