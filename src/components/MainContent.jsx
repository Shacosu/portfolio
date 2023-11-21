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

function MainContent() {
	return (
		<main className="container mx-auto py-5 px-4">
			<div className="mb-8">
				<h1 className="text-4xl font-bold text-white text-center">
					Pablo Andres Espinoza Hernandez
				</h1>
				<p className="text-lg text-gray-600 text-center">
					Desarrollador de Software - Fullstack
				</p>
			</div>
			<div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 lg:grid-cols-2">
				<div className="max-w-xl mx-auto space-y-4">
					<div>
						<h2 className="text-xl font-bold text-white">Perfil</h2>
						<p className="text-base text-gray-400 text-justify">
							Desarrollador de software, titulado de <strong>Ingenieria en ejecucion Informatica</strong>, con experiencia en el desarrollo
							de aplicaciones web y conocimientos en el desarrollo de API REST.
						</p>
					</div>
					<div>
						<h2 className="text-xl font-bold text-white">Contacto</h2>
						<p className="text-base text-gray-400 text-justify">
							<ul>
								<li>Correo: pespinozahernandez22@gmail.com</li>
								<li>Telefono: +56 9 4701 5035</li>
								<li>
									LinkedIn:{" "}
									<a
										href="https://www.linkedin.com/in/pablojs/"
										className="text-blue-500"
									>
										https://www.linkedin.com/in/pablojs/
									</a>
								</li>
								<li>
									Github: <a href="https://github.com/Shacosu" target="_blank" rel="noreferrer" className="text-blue-500">Shacosu</a>
								</li>
							</ul>
						</p>
						<div className="mt-4">
							<h2 className="text-2xl font-bold text-white">Habilidades</h2>
							<div className="grid grid-cols-3 gap-8 pt-4">
								<div className="flex flex-col items-center">
									<JavascriptIcon />
									<p className="text-lg text-gray-400 text-justify">
										Javascript
									</p>
								</div>
								<div className="flex flex-col items-center">
									<ReactIcon />
									<p className="text-lg text-gray-400 text-justify">React</p>
								</div>
								<div className="flex flex-col items-center">
									<NodeIcon />
									<p className="text-lg text-gray-400 text-justify">Node</p>
								</div>
								<div className="flex flex-col items-center">
									<NextjsIcon />
									<p className="text-lg text-gray-400 text-justify">NextJs</p>
								</div>
								<div className="flex flex-col items-center">
									<SQLIcon />
									<p className="text-lg text-gray-400 text-justify">
										MSSQL/MYSQL
									</p>
								</div>
								<div className="flex flex-col items-center">
									<AWSIcon />
									<p className="text-lg text-gray-400 text-justify">AWS</p>
								</div>
							</div>
							<Link to="about" className="text-gray-300 float-right mt-3 italic border-b cursor-pointer">
								Entre otras tecgnologias...
							</Link>
						</div>
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
								Universidad de las Americas
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								Santiago, CL
							</h4>
							<p className="text-ellipsis">
								Estudié Ingeniería en Informática en la Universidad de las
								Américas, donde aprendí a desarrollar aplicaciones web.
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
								Desarrollador de Software
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								Santiago, CL
							</h4>
							<p className="text-ellipsis">
								Trabajé en una empresa dedicada al comercio electrónico como
								desarrollador de software, donde enfrenté y superé muchos
								desafíos.
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							date="2022 - Presente"
							iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							icon={<WrenchIcon />}
						>
							<h3 className="vertical-timeline-element-title">
								Desarrollador de Software - Fullstack
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								Proximamente
							</h4>
							<p className="text-ellipsis">
								En busca de mi próximo desafío laboral como desarrollador de
								software.
							</p>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</div>
			</div>
		</main>
	);
}

export default MainContent;
