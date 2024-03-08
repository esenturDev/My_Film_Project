import scss from "./Header.module.scss";
import logo from "../../../assets/search-line (1).svg";
import {
	useDeleteRegistrMutation,
	useGetRegistrQuery,
} from "../../../reducer/api/crud/login";
import { useState } from "react";
// import { Input } from "../../Ul/input/Input";

export const Header = () => {
	const { data } = useGetRegistrQuery();
	const [inputValue, setInputValue] = useState<string>("");
	const [isOpenInput, setIsOpenInput] = useState<boolean>(false);
	const [deleteRegistr] = useDeleteRegistrMutation();
	const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
	async function removeUserPfofile(id: number) {
		localStorage.removeItem("isUsers");
		await deleteRegistr(id);
	}
	return (
		<header className={scss.header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.headerNavDiv}>
						<img src="https://etnomedia.kg/assets/images/logo.svg" alt="logo" />
						<nav>
							<ul>
								<li>ВСЕ!</li>
								<li>ФИЛЬМЫ</li>
								<li>СЕРИАЛЫ</li>
								<li>ТАМАШОУ</li>
								<li>МУЛЬТИКИ</li>
							</ul>
						</nav>
					</div>
					<div className={scss.headerDiv2}>
						{isOpenInput && (
							<input
								type="text"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								placeholder="Поиск..."
							/>
						)}
						<>
							<img
								onClick={() => setIsOpenInput(!isOpenInput)}
								className={scss.photoIcon}
								src={logo}
								alt="logo"
							/>
						</>
						{data?.map((itemProfile) => (
							<>
								<img
									src={itemProfile.img}
									alt={itemProfile.login}
									key={itemProfile._id}
									onClick={() => setIsOpenProfile(!isOpenProfile)}
								/>
								{isOpenProfile && (
									<>
										<div>
											<button onClick={() => removeUserPfofile(itemProfile._id!)}>Войти</button>
										</div>
									</>
								)}
							</>
						))}
					</div>
				</div>
			</div>
		</header>
	);
};
