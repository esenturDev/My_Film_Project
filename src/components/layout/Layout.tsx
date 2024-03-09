import { Route, Routes, useLocation } from "react-router";
import scss from "./Layout.module.scss";
import Login from "../pages/Login";
import Registr from "../pages/Registr";
import { Header } from "./header/Header";
import { Home } from "../Home/Home";
import { HomePages } from "../pages/HomePages/HomePages";
import { IdCardsResult } from "../pages/IdCardsResult";
import InputValueCards from "../pages/InputValueCards";
import { Error } from "../pages/Error";
import { KinoPages } from "../pages/kinoPages/KinoPages";
import SERIES from "../pages/SERIES/SERIES";
import { Funny } from "../pages/funny/Funny";
import CARTOONS from "../pages/CARTOONS/CARTOONS";
import Footer from "./footer/Footer";
import { useState } from "react";
import { InputValueResult } from "../pages/inputValueResult/InputValueResult";

const Layout = () => {
	const { pathname } = useLocation();
	const [inputValue, setInputValue] = useState<string>('');
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
			<Header inputValue={inputValue} setInputValue={setInputValue}/>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<HomePages />} />
					<Route path="/home/:id" element={<IdCardsResult />} />
					<Route path="/home/kino" element={<KinoPages />} />
					<Route path="/home/SERIES" element={<SERIES />} />
					<Route path="/home/:inputValue" element={<InputValueCards />} />
					<Route path="/home/funny" element={<Funny />} />
					<Route path="/home/CARTOONS" element={<CARTOONS />} />
					<Route path="/home/inputValueResult" element={<InputValueResult inputValue={inputValue}/>}/>
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
