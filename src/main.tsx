import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ProviderStore } from "./reducer/ProviderStore.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ProviderStore>
			<App />
		</ProviderStore>
	</React.StrictMode>
);
