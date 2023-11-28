import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { WrenchIcon } from "@heroicons/react/24/outline";
import "react-vertical-timeline-component/style.min.css";
import {
	AWSIcon,
	AcademicIcon,
	JavascriptIcon,
	NextjsIcon,
	NodeIcon,
	ReactIcon,
	RocketIcon,
	SQLIcon,
} from "../assets/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
						<h2 className="text-xl font-bold text-white">{t("content.profile.title")}</h2>
						<p className="text-base text-gray-400 text-justify">
								{t("content.profile.content")}
						</p>
					</div>
					<div className="rounded ">
						<h2 className="text-xl font-bold text-white">{t("content.contact.title")}</h2>
						
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
										Github: <Link to="https://github.com/Shacosu" target="_blank" rel="noreferrer" className="text-blue-500">Shacosu</Link>
									</li>
							</ul>
						
					
					</div>
					<div className="mt-4">
							<h2 className="text-xl font-bold text-white">{t("content.skills.title")}</h2>
							<div className="grid grid-cols-3 gap-12 pt-4">
								<div className="flex gap-x-2">
									<JavascriptIcon />
									<p className="text-lg text-gray-400 text-justify">
										Javascript
									</p>
								</div>
								<div className="flex gap-x-2">
									<ReactIcon />
									<p className="text-lg text-gray-400 text-justify">React</p>
								</div>
								<div className="flex gap-x-2">
									<NodeIcon />
									<p className="text-lg text-gray-400 text-justify">Node</p>
								</div>
								<div className="flex gap-x-2">
									<NextjsIcon />
									<p className="text-lg text-gray-400 text-justify">NextJs</p>
								</div>
								<div className="flex gap-x-2">
									<SQLIcon className="" />
									<p className="text-lg text-gray-400 text-justify">
										MSSQL/MYSQL
									</p>
								</div>
								<div className="flex gap-x-2">
									<AWSIcon className="" />
									<p className="text-lg text-gray-400 text-justify">AWS</p>
								</div>
							</div>
							<Link to="meetings" className="text-gray-300 float-right mt-3 italic border-b cursor-pointer">
								{t("content.profile.more")}
							</Link>
						</div>
				</div>
				<div>
					<VerticalTimeline>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								background: "rgb(33, 150, 243)",
								color: "#fff",
								marginRight: "10px",
							}}
							contentArrowStyle={{
								borderRight: "7px solid  rgb(33, 150, 243)",
							}}
							date="2018 - 2023"
							iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							icon={<AcademicIcon />}
						>
							<h3 className="vertical-timeline-element-title">
								{t("content.timeline.title")}
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								Santiago, CL
							</h4>
							<p className="text-ellipsis">
									{t("content.timeline.text")}
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							date="2022 - 2023"
							contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							icon={<RocketIcon />}
						>
							<h3 className="vertical-timeline-element-title">
								{t("content.secondTimeline.title")}
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								Santiago, CL
							</h4>
							<p className="text-ellipsis">
								{t("content.secondTimeline.text")}
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							date={t("content.thirdTimeline.date")}
							iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							icon={<WrenchIcon />}
						>
							<h3 className="vertical-timeline-element-title">
								{t("content.thirdTimeline.title")}
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								{t("content.thirdTimeline.subtitle")}
							</h4>
							<p className="text-ellipsis">
								{t("content.thirdTimeline.text")}
							</p>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</div>
			</div>
		</main>
	);
}

export default MainContent;
