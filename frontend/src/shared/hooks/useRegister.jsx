import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {register as loginRequest} from '../../services';
import toast from "react-hot-toast"; 

export const useRegister = () => {
	//variable para manejar el tiempo, y la variable para manejar el estado
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	//funcion para trabjar la data
	const register = async (username, email, password ) => {
		setIsLoading(true);
		const response = await loginRequest({username,email, password});

		setIsLoading(false);
		if (response.error) {
			return toast.error(
				response.error?.response?.data || "ocurrio un error al registrarse"
			);
		}
		// el sesion Storage se mantiene en el navegador.
		const { userDetails } = response.data;
		
		localStorage.setItem("user", JSON.stringify(userDetails));
		navigate("/");
	};
	return {
		register,
		isLoading,
	};
};
