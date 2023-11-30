

import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Technologies from "./Technologies";
import TimeLine from "./TimeLine";

function MainContent() {
	const { t } = useTranslation("global");

	return (
		<main className="container mx-auto px-4">
			<div className="mb-2">
				<h1 className="text-4xl font-bold text-white text-center mb-2">
					Pablo Andres Espinoza Hernandez
				</h1>
				<p className="text-lg text-gray-600 text-center">
					{t("content.subtitle")}
				</p>
			</div>
			<div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 lg:grid-cols-2 ">
				<div className="max-w-xl mx-auto space-y-10">
					<div>
						<h2 className="text-xl font-bold text-white">
							{t("content.profile.title")}
						</h2>
						<p className="text-base text-gray-400 text-justify">
							{t("content.profile.content")}
						</p>
					</div>
					<div className="rounded ">
						<h2 className="text-xl font-bold text-white">
							{t("content.contact.title")}
						</h2>

						<ul className="space-y-1 text-base text-gray-400">
							<li>{t("content.contact.email")}</li>
							<li>{t("content.contact.phone")}</li>
							<li>
								LinkedIn:{" "}
								<Link
									to="https://www.linkedin.com/in/pablojs/"
									target="_blank"
									rel="noreferrer"
									className="text-blue-500"
								>
									https://www.linkedin.com/in/pablojs/
								</Link>
							</li>
							<li>
								Github:{" "}
								<Link
									to="https://github.com/Shacosu"
									target="_blank"
									rel="noreferrer"
									className="text-blue-500"
								>
									Shacosu
								</Link>
							</li>
							<li>
								CV:{" "}
								<a href="/CV.pdf" className="text-blue-500" download>
									{t("content.contact.resume")}
								</a>
							</li>
						</ul>
					</div>
					<Technologies />
				</div>
				<TimeLine />
			</div>
		</main>
	);
}

export default MainContent;
