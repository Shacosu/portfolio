import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Project() {
	const { t } = useTranslation("global");
	const projectList = [
		{
			id: 1,
			title: t("projects.project-01.title"),
			description: t("projects.project-01.description"),
			image: "KrapyGames.webp",
			technologies: ["Nextjs", "TailwindCSS", "Nodejs", "MongoDB"],
			link: "https://krapygames.lat",
			isPrivate: false,
		},
		{
			id: 2,
			title: t("projects.project-02.title"),
			description: t("projects.project-02.description"),
			image: "erp-carworkshop.png",
			technologies: ["Nextjs", "Bootstrap", "Postgresql"],
			isPrivate: true,
		},
		{
			id: 2,
			title: t("projects.project-03.title"),
			description: t("projects.project-03.description"),
			image: "Book-Watcher.webp",
			technologies: ["Nodejs", "Prisma", "Postgresql", "Render"],
			isPrivate: true,
		},
	];
	return (
		<div className="container mx-auto h-full my-8">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center text-sm ">
				{projectList.map(
					({
						id,
						title,
						image,
						description,
						technologies,
						isPrivate,
						link,
					}) => (
						<div
							className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900"
							key={id}
						>
							<h2 className="font-bold text-xl py-4 text-center text-white bg-slate-950">
								{title}
							</h2>

							<LazyLoadImage
								src={image}
								alt={title}
								title={title}
								effect="blur"
								className="min-h-64 px-4 h-48 mx-auto object-cover rounded mt-2"
							/>
							<div className="px-2 py-2 mt-auto">
								<p className="text-gray-400 text-justify line-clamp-4">
									{description}
								</p>
							</div>
							<div className="px-2 pt-4 grid grid-cols-4">
								{technologies.map((technology) => (
									<span
										key={technology}
										className="inline-block bg-white hover:bg-gray-200 cursor-pointer rounded text-xs p-1 font-semibold text-gray-800 mr-2 text-center"
									>
										{technology}
									</span>
								))}
							</div>
							<div className="py-4 px-2">
								{!isPrivate ? (
									<button
										onClick={() => window.open(link, "_blank")}
										className={`text-gray-300 bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-full text-center uppercase ${
											!isPrivate
												? "cursor-pointer"
												: "cursor-not-allowed opacity-50"
										}}`}
									>
										{t("privacy.public")}
									</button>
								) : (
									<button
										disabled={!isPrivate}
										className={`text-gray-300 bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-full text-center uppercase cursor-not-allowed opacity-40`}
									>
										{t("privacy.private")}
									</button>
								)}
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}
