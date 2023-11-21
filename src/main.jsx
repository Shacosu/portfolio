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
		<RouterProvider router={router} />
	</React.StrictMode>
);
