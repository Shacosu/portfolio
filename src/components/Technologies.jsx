import {
	AWSIcon,
	ExpressIcon,
	JavascriptIcon,
	NextjsIcon,
	NodeIcon,
	PuppeteerIcon,
	ReactIcon,
	SQLIcon,
	TailwindCssIcon,
} from "../assets/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Technologies() {
	const { t } = useTranslation("global");
	return (
		<div className="mt-4">
		<h2 className="text-xl font-bold text-white">{t("content.skills.title")}</h2>
		<div className="grid grid-cols-3 gap-8 pt-4">
			<div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 cursor-pointer py-1 rounded-ss rounded-br justify-center">
				<JavascriptIcon />
				<p className="text-sm text-gray-300 tracking-wider font-semibold ">
					Javascript
				</p>
			</div>
			<div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 cursor-pointer py-1 rounded-ss rounded-br justify-center">
				<ReactIcon />
				<p className="text-sm text-gray-300 tracking-wider font-semibold text-justify">React</p>
			</div>
			<div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 cursor-pointer py-1 rounded-ss rounded-br justify-center">
				<NodeIcon />
				<p className="text-sm text-gray-300 tracking-wider font-semibold text-justify">Node</p>
			</div>
			<div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 cursor-pointer py-1 rounded-ss rounded-br justify-center">
				<NextjsIcon />
				<p className="text-sm text-gray-300 tracking-wider font-semibold text-justify">NextJs</p>
			</div>
			<div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 cursor-pointer py-1 rounded-ss rounded-br justify-center">
				<SQLIcon className="" />
				<p className="text-sm text-gray-300 tracking-wider font-semibold text-justify">
					SQL
				</p>
			</div>
			<div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 cursor-pointer py-1 rounded-ss rounded-br justify-center">
				<AWSIcon className="" />
				<p className="text-sm text-gray-300 tracking-wider font-semibold text-justify">AWS</p>
			</div>
			<div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 cursor-pointer py-1 rounded-ss rounded-br justify-center">
				<PuppeteerIcon className="" />
				<p className="text-sm text-gray-300 tracking-wider font-semibold text-justify">Puppeteer</p>
			</div>
			<div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 cursor-pointer py-1 rounded-ss rounded-br justify-center">
				<ExpressIcon className="" />
				<p className="text-sm text-gray-300 tracking-wider font-semibold text-justify">ExpressJs</p>
			</div>
			<div className="flex flex-col items-center gap-x-2 bg-gray-800 hover:bg-gray-700 cursor-pointer py-1 rounded-ss rounded-br justify-center">
				<TailwindCssIcon className="" />
				<p className="text-sm text-gray-300 tracking-wider font-semibold text-justify">Tailwindcss</p>
			</div>
		</div>
		<Link to="meetings" className="text-gray-300 tracking-wider float-right mt-3 italic border-b cursor-pointer">
			{t("content.profile.more")}
		</Link>
	</div>
	)
}
