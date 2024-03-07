import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Providers from "../providers/Providers";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Providers>
					<Layout />
				</Providers>
			</BrowserRouter>
		</>
	);
};

export default App;
