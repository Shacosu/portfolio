import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
	return (
		<div className="dark:bg-black text-black dark:text-white flex flex-col justify-between h-screen">
			<Header />
				<Outlet />
			<Footer />
		</div>
	);
}
