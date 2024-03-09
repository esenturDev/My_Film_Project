/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import scss from "./InputValueResult.module.scss";
import { useGetProjectQuery } from "../../../reducer/api/crud";
export const InputValueResult: FC<{
  inputValue: string;
}> = ({inputValue}) => {
  const {data, isLoading} =  useGetProjectQuery();
  const filtredInputValueResult = data?.filter((itemInputValue) => itemInputValue.nameg === inputValue);
  
	return (
		<div>
			<div className="container">
				<div className={scss.content}>
          {filtredInputValueResult?.map((item) => (
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
