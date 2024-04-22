import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/EscudoPeque.svg";
import { useUserDetails } from "../../shared/hooks/";

const NavLogo = () => {
	return (
		<div className="nav-logo-container">
			<img
				className="nav-logo"
				width="100%"
				height="100%"
				src={logo}
				alt="Escudo logo"
			/>
		</div>
	);
};

const NavButton = ({ text, onClickHandler }) => {
	return (
		<span className="nav-button" onClick={onClickHandler}>
			{text}
		</span>
	);
};

export const Navbar = () => {
	const { isLogged, logout } = useUserDetails();
	const navigate = useNavigate();

	const handleNavigateToAuthPage = () => {
		navigate("/auth");
	};
	const handleNavigateToSettingsPage = () => {
		navigate("/settings");
	};
	const handleNavigateToChannelPage = () => {
		navigate("/channels");
	};

	const handleLogout = () => {
		logout();
	};
	return (
		<div className="nav-container">
			<NavLogo />
			<div className="nav-buttons-container">
				<NavButton
					text="Browse"
					onClickHandler={handleNavigateToChannelPage}
				/>
				{!isLogged ? (
					<NavButton
						text="login"
						onClickHandler={handleNavigateToAuthPage}
					/>
				) : (
					<div>
						<NavButton
							text="My Account"
							onClickHandler={handleNavigateToSettingsPage}
						/>
						<NavButton
							text="Logout"
							onClickHandler={handleLogout}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
