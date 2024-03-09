/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetProjectQuery } from "../../../reducer/api/crud";
import scss from "./KinoPages.module.scss";
export const KinoPages = () => {
	const { data, isLoading } = useGetProjectQuery();
  const filtredDataKino = data?.filter(
    (itemKino) => itemKino.nameg === "ФИЛЬМЫ"
  );
  console.log(filtredDataKino);
	return (
		<div>
			{filtredDataKino?.map((item) => (
				<div key={item._id}>
					<p>{item.title}</p>
					<iframe src={item.iframe}></iframe>
					<span>{item.nameg}</span>
				</div>
			))}
		</div>
	);
};
