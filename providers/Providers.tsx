import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const Providers: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isAuth = localStorage.getItem("isUsers");
	const isAuthResult = !!isAuth;
	useEffect(() => {
		if (isAuthResult && pathname === "/login") {
			navigate("/home");
		} else if (isAuthResult && pathname === "/registr") {
			navigate("/home");
		} else if (!isAuthResult && pathname === "/home") {
			navigate("/");
		} else if (isAuthResult && pathname === "/") {
			navigate("/home");
		}
	}, [pathname]);
	return children;
};

export default Providers;
