//clase que nos servira para los hooks personalizables
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//alias para diferenciar de funcion
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
	//variable para manejar el tiempo, y la variable para manejar el estado
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	//funcion para trabjar la data
	const login = async (email, password ) => {
		setIsLoading(true);
		const response = await loginRequest({email, password});

		setIsLoading(false);
		if (response.error) {
			return toast.error(
				response.error?.response?.data || "ocurrio un error al iniciar sesion"
			);
		}
		// el sesion Storage se mantiene en el navegador.
		const { userDetails } = response.data;
		
		localStorage.setItem("user", JSON.stringify(userDetails));
		navigate("/");
	};
	return {
		login,
		isLoading,
	};
};
