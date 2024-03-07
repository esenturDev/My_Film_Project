import { Route, Routes, useLocation } from "react-router";
import scss from "./Layout.module.scss";
import Login from "../pages/Login";
import Registr from "../pages/Registr";
import { Header } from "./header/Header";
import { Home } from "../Home/Home";
import { HomePages } from "../pages/HomePages";

const Layout = () => {
	const { pathname } = useLocation();
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		);
	} else if (pathname === "/registr") {
		return (
			<Routes>
				<Route path="/registr" element={<Registr />} />
			</Routes>
		);
	}
	return (
		<div className={scss.layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<HomePages />} />
				</Routes>
			</main>
		</div>
	);
};

export default Layout;
