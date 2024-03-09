/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetProjectQuery } from "../../../reducer/api/crud";
import scss from "./CARTOONS.module.scss";

const CARTOONS = () => {
	const { data, isLoading } = useGetProjectQuery();
  
	const filtredData = data?.filter(
		(itemIsCARTOONS) => itemIsCARTOONS.nameg === "мультики"
	);

	return (
		<div>
			<div className="container">
				<div className={scss.content}>
          {filtredData?.map((item) => (
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

export default CARTOONS;
