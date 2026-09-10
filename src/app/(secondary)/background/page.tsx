import type { Metadata } from "next";
import Image from "next/image";

import PublicationAuthors from "@/components/PublicationAuthors";
import { site } from "@/data/site";
import {
	researchPublications,
	type ResearchPublication,
} from "@/data/research";

const backgroundDescription =
	"Background of Yashasvi Sorapalli, including projects, internships, publications, and certifications.";

export const metadata: Metadata = {
	title: "Background",
	description: backgroundDescription,
	alternates: {
		canonical: "/background/",
	},
	openGraph: {
		title: `Background | ${site.name}`,
		description: backgroundDescription,
		url: `${site.url}/background/`,
		siteName: site.name,
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Background | Yashasvi Sorapalli",
		description: backgroundDescription,
	},
};

const internships = [
	{
		title: "Indian Institute of Astrophysics",
		role: "Research Intern",
		date: "Oct 2023 – Jan 2024",
		description:
			"Worked on solar imaging and atmospheric seeing analysis, developing a Fried parameter model and a LabVIEW-based processing pipeline with Python.",
	},
	{
		title: "Inferigence Quotient",
		role: "Research Intern",
		date: "Sep 2022 – Sep 2023",
		description:
			"Worked on multi-camera, multi-person tracking using computer vision and DeepSORT.",
	},
	{
		title: "Microsoft",
		role: "Microsoft Mentee",
		date: "May 2022 – Jun 2022",
		description:
			"Explored streaming and recommendation algorithms as part of the Microsoft mentorship program.",
	},
];

const projects = [
	{
		title: "Multi-camera Multi-person Tracking",
		date: "2022 – 2023",
		description:
			"Developed a multi-camera, multi-person tracking system using DeepSORT and MySQL.",
	},
	{
		title: "Decentralized Document Storage with NFT Authentication",
		date: "2023",
		description:
			"Developed a blockchain-based document verification system using decentralized storage and NFT-based authentication.",
	},
];

const certifications = [
	{
		title: "Modern Robotics, Course 1: Foundations of Robot Motion",
		issuer: "Northwestern University",
		date: "2025",
	},
	{
		title: "Modern Robotics, Course 2: Robot Kinematics",
		issuer: "Northwestern University",
		date: "2025",
	},
	{
		title: "Mathematics for Machine Learning Specialization",
		issuer: "Imperial College London",
		date: "2023",
	},
	{
		title: "Accelerated Computer Science Fundamentals",
		issuer: "University of Illinois Urbana-Champaign",
		date: "2023",
	},
];

function PublicationRow({
	publication,
	index,
}: {
	publication: ResearchPublication;
	index: number;
}) {
	return (
		<li className="research-publication work-page-fade">
			<a
				href={publication.href}
				target="_blank"
				rel="noopener noreferrer"
				className="research-publication-media"
				aria-label={`View ${publication.title}`}
			>
				<Image
					src={publication.image}
					alt={publication.imageAlt}
					width={800}
					height={500}
					quality={90}
					sizes="(min-width: 760px) 280px, 100vw"
					loading={index < 2 ? "eager" : "lazy"}
					className="research-publication-image"
				/>
			</a>

			<div className="research-publication-copy">
				<h3 className="research-publication-title">
					<a
						href={publication.href}
						target="_blank"
						rel="noopener noreferrer"
						className="portfolio-link"
					>
						{publication.title}
					</a>
				</h3>

				<PublicationAuthors
					authors={publication.authors}
					className="research-authors"
				/>

				<p className="research-publication-meta">
					{publication.venue}, {publication.date}
				</p>

				<nav
					className="research-resource-links"
					aria-label={`${publication.shortTitle} resources`}
				>
					{publication.resources.map((resource, resourceIndex) => (
						<span
							key={resource.label}
							className="research-resource-item"
						>
							<a
								href={resource.href}
								target="_blank"
								rel="noopener noreferrer"
								className="portfolio-link research-resource-link"
							>
								{resource.label}
							</a>

							{resourceIndex <
							publication.resources.length - 1 ? (
								<span
									className="research-resource-separator"
									aria-hidden="true"
								>
									{" / "}
								</span>
							) : null}
						</span>
					))}
				</nav>

				<p className="research-publication-description">
					{publication.description}
				</p>
			</div>
		</li>
	);
}

export default function BackgroundPage() {
	return (
		<main className="research-main">
			<div className="research-container">
				<header className="work-intro work-page-fade">
					<h1>Background</h1>
				</header>

				{/* Projects */}
				<section className="background-section">
					<details className="background-details" open>
						<summary className="background-summary">
							<span>Projects</span>
							<span
								className="background-summary-icon"
								aria-hidden="true"
							>
								+
							</span>
						</summary>

						<div className="background-content">
							{projects.map((project) => (
								<article
									key={project.title}
									className="background-item"
								>
									<h3 className="background-item-title">
										{project.title}
									</h3>

									<p className="background-item-meta">
										{project.date}
									</p>

									<p className="background-item-description">
										{project.description}
									</p>
								</article>
							))}
						</div>
					</details>
				</section>

				{/* Internships */}
				<section className="background-section">
					<details className="background-details">
						<summary className="background-summary">
							<span>Internships</span>
							<span
								className="background-summary-icon"
								aria-hidden="true"
							>
								+
							</span>
						</summary>

						<div className="background-content">
							{internships.map((internship) => (
								<article
									key={internship.title}
									className="background-item"
								>
									<h3 className="background-item-title">
										{internship.title}
									</h3>

									<p className="background-item-meta">
										{internship.role} · {internship.date}
									</p>

									<p className="background-item-description">
										{internship.description}
									</p>
								</article>
							))}
						</div>
					</details>
				</section>

				{/* Publications */}
				<section className="background-section">
					<details className="background-details">
						<summary className="background-summary">
							<span>Publications</span>
							<span
								className="background-summary-icon"
								aria-hidden="true"
							>
								+
							</span>
						</summary>

						<div className="background-content">
							<ol className="research-publications">
								{researchPublications.map(
									(publication, index) => (
										<PublicationRow
											key={publication.title}
											publication={publication}
											index={index}
										/>
									),
								)}
							</ol>
						</div>
					</details>
				</section>

				{/* Certifications */}
				<section className="background-section">
					<details className="background-details">
						<summary className="background-summary">
							<span>Certifications</span>
							<span
								className="background-summary-icon"
								aria-hidden="true"
							>
								+
							</span>
						</summary>

						<div className="background-content">
							{certifications.map((certification) => (
								<article
									key={certification.title}
									className="background-item"
								>
									<h3 className="background-item-title">
										{certification.title}
									</h3>

									<p className="background-item-meta">
										{certification.issuer} ·{" "}
										{certification.date}
									</p>
								</article>
							))}
						</div>
					</details>
				</section>
			</div>
		</main>
	);
}