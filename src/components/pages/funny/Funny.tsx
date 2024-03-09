/* eslint-disable @typescript-eslint/no-unused-vars */
import scss from "./Funny.module.scss";
import { useGetProjectQuery } from "../../../reducer/api/crud";

export const Funny = () => {
	const { data, isLoading } = useGetProjectQuery();
  const filtredIsData = data?.filter((itemFunny) => itemFunny.nameg === "тамашоу");
  console.log(filtredIsData);
	return (
		<div>
			<div className="container">
				<div className={scss.content}>
          {filtredIsData?.map((item) => (
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
