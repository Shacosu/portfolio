import { WrenchIcon } from "@heroicons/react/24/outline";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { AcademicIcon, RocketIcon } from "../assets/icons";
import { useTranslation } from "react-i18next";

export default function TimeLine() {
	const { t } = useTranslation("global");
	return (
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
					<h4 className="vertical-timeline-element-subtitle">Santiago, CL</h4>
					<p className="text-ellipsis">{t("content.timeline.text")}</p>
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
					<h4 className="vertical-timeline-element-subtitle">Santiago, CL</h4>
					<p className="text-ellipsis">{t("content.secondTimeline.text")}</p>
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
					<p className="text-ellipsis">{t("content.thirdTimeline.text")}</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}
