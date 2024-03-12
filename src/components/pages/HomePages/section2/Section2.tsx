/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { useGetProjectQuery } from "../../../../reducer/api/crud";
import scss from "./Section2.module.scss";
export const Section2 = () => {
	const { data, isLoading } = useGetProjectQuery();

	return (
		<div className={scss.section2}>
			<div className="container">
				<div className={scss.content}>
					{data?.map((item) => (
						<div key={item._id}>
							<img src={item.img} alt={item.title} />
							<p>{item.title}</p>
              <p>{item.freeOfCharge}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
