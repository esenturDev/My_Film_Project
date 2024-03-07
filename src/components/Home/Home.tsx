import { useNavigate } from "react-router";
import Button from "../Ul/button/Button";
import scss from "./Home.module.scss";

export const Home = () => {
	const navigate = useNavigate();
	function LoginPages() {
		navigate("/login");
	}
	return (
		<div className={scss.home}>
			<div className="container">
				<div className={scss.content}>
					<header>
						<div className={scss.contents1}>
							<img
								src="https://etnomedia.kg/assets/images/logo.svg"
								alt="logo"
							/>
							<nav className={scss.navbar}>
								<ul>
									<li>лучшие этномедиа</li>
									<li>ФИЛЬМЫ</li>
								</ul>
							</nav>
						</div>
						<div className={scss.contents1}>
							<Button onClick={LoginPages}>Login</Button>
						</div>
					</header>
					<main>
						<div className={scss.mainContent1}>
							<div className={scss.contents}>
								<div className={scss.texts1}>
									<h2>Волшебный семейный</h2>
									<h2>вечер с попкорном</h2>
								</div>
								<div className={scss.texts2}>
									<p>
										Здесь можно выбрать фильм, <br />мультфильм, а также сериал на наш <br />вкус. У нас все новинки в хорошем <br />качестве. Смотрите с удовольствием.
									</p>
								</div>
								<button className={scss.buttonMain}>Смотреть</button>
							</div>
						</div>
						<div className={scss.photos}>
							<img
								className={scss.img1}
								src="https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/11/m_scale_1200-3.jpg"
								alt="logo"
							/>
							<img
								className={scss.img2}
								src="https://media.istockphoto.com/id/1355176914/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=eE2myIrLXwV0rZPLIPwdXUWZUVI2fWhgVyF7Xn9gQgs="
								alt="logo"
							/>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};
