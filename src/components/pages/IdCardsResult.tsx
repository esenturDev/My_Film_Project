/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useGetItemIdQuery } from "../../reducer/api/crud";

export const IdCardsResult = () => {
	const { data, isLoading } = useGetItemIdQuery();
	return (
		<div>
			{data?.map((item) => (
				<div key={item._id}>
					<img src={item.img} alt={item.title} />
				</div>
			))}
		</div>
	);
};
