import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
// React router dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import MainContent from "./components/MainContent.jsx";
import About from "./pages/About.jsx";
import Meeting from "./components/Meeting.jsx";
import Project from "./pages/Project.jsx";

// @React i18n
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
	interpolation: { escapeValue: false },
	lng: "en",
	resources: {
		es: {
			global: global_es,
		},
		en: {
			global: global_en,
		},
	},
});

const router = createBrowserRouter([
	{
		path: "/portfolio",
		element: <MainLayout />,
		children: [
			{ path: "", element: <MainContent /> },
			{ path: "about", element: <About /> },
			{ path: "projects", element: <Project /> },
			{ path: "meetings", element: <Meeting /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<RouterProvider router={router} />
		</I18nextProvider>
	</React.StrictMode>
);
