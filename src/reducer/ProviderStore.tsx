import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
interface ProviderStoreProps {
	children: ReactNode;
}

export const ProviderStore: FC<ProviderStoreProps> = ({ children }) => {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
};
