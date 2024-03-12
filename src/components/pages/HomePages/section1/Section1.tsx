/* eslint-disable @typescript-eslint/no-unused-vars */
import scss from "./Section1.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useGetProjectQuery } from "../../../../reducer/api/crud";
import { Link } from "react-router-dom";
// import { useState } from "react";
const Section1 = () => {
	// const [itemIdResult, setItemIdResult] = useState();
	const { data, isLoading } = useGetProjectQuery();
	const filtredData = data?.filter(
		(itemFilter) => itemFilter.nameg === "ФИЛЬМЫ"
	);
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 1, spacing: 5 },
			},
			"(min-width: 700px)": {
				slides: { perView: 1, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 1, spacing: 10 },
			},
		},
		slides: { perView: 1 },
	});
	return (
		<div className={scss.section1}>
			<div className="container">
				<div className={scss.content}>
					<div ref={sliderRef} className="keen-slider">
						{filtredData?.map((item, index) => (
							<Link
								to={`/home/${item._id}`}
								key={index}
								// onClick={() => setItemIdResult(item._id)}
								className="keen-slider__slide number-slide1">
								<img
									style={{ width: "100%", height: "auto" }}
									src={item.img}
									alt="logo"
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section1;
