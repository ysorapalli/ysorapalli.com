import ProjectImage from "@/components/ProjectImage";
import type { Metadata } from "next";

import { site } from "@/data/site";

const backgroundDescription =
	"Background of Yashasvi Sorapalli, including projects, research, internships, and certifications.";

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

const projects = [
	{
		title: "Multi-camera Multi-person Tracking",
		organization: "Inferigence Quotient",
		date: "2022 - 2023",
		description:
			"A multi-camera, multi-person tracking system that extended a single-camera DeepSORT pipeline to operate across multiple camera views. The system uses a shared MySQL database to communicate tracking information between cameras and support cross-camera identity tracking.",
		system:
			"Each camera runs its own DeepSORT tracker while writing relevant tracking information to a shared database. Information from one camera can then be retrieved by another camera to facilitate tracking across camera views. The system was evaluated across both single-camera and multi-camera scenarios, while modifications to the tracking algorithm were used to improve identity preservation during occlusion.",
		contribution:
			"My primary contribution was extending the original system from a single-camera setup to a multi-camera architecture and handling the MySQL-based communication between cameras. I also worked with the team on improvements to the tracking algorithm, particularly around maintaining identities when people became temporarily occluded.",
		focus: [
			"Computer Vision",
			"Multi-object Tracking",
			"DeepSORT",
			"Cross-camera Tracking",
			"MySQL",
		],
		publication:
			"Published in the Indonesian Journal of Electrical Engineering and Computer Science in 2025.",
		link: "https://ijeecs.iaescore.com/index.php/IJEECS/article/view/37989",
		image: "/images/projects/multicamera-tracking.jpg",
		imageAlt: "Multi-camera multi-person tracking project",
	},
	{
		title: "Decentralized Document Storage with NFT Authentication",
		organization: "R.V. College of Engineering",
		date: "2023",
		description:
			"A decentralized document storage and authentication system combining blockchain, IPFS, NFTs, and smart contracts. The system uses decentralized storage for documents while blockchain records provide a verifiable authentication mechanism.",
		system:
			"Documents are encrypted and stored using IPFS, while a Solidity smart contract manages the NFT associated with each document. The document's decentralized storage reference is linked through the NFT, creating a persistent blockchain record that can be used to verify the document.",
		contribution:
			"This was a collaborative project in which the implementation was largely carried out as a group. My primary involvement was validating the system and its document-authentication workflow, including checking that the complete storage and authentication process worked as intended.",
		focus: [
			"Blockchain",
			"IPFS",
			"NFT Authentication",
			"Smart Contracts",
			"Document Verification",
		],
		publication: "Published at IEEE CSITSS in 2024.",
		link: "https://doi.org/10.1109/CSITSS64042.2024.10816830",
		image: "/images/projects/blockchain-document-storage.jpg",
		imageAlt: "Decentralized document storage project",
	},
];

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
			"Worked on multi-camera, multi-person tracking using computer vision and DeepSORT, contributing to the extension from a single-camera system to a multi-camera architecture.",
	},
	{
		title: "Microsoft",
		role: "Microsoft Mentee",
		date: "May 2022 – Jun 2022",
		description:
			"Explored streaming and recommendation algorithms as part of the Microsoft mentorship program.",
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

function ProjectRow({
	project,
}: {
	project: (typeof projects)[number];
}) {
	return (
		<details className="background-project-details">
			<summary className="background-project-summary">
				<div className="background-project-summary-title">
					<h3 className="background-project-title">
						{project.title}
					</h3>

					<span
						className="background-project-chevron"
						aria-hidden="true"
					/>
				</div>

				<p className="background-project-organization">
					{project.organization}
				</p>

				<p className="background-project-date">{project.date}</p>
			</summary>

			<div className="background-project-expanded">
				<div className="background-project-image">
					<ProjectImage
						src={project.image}
						alt={project.imageAlt}
					/>
				</div>

				<div className="background-project-body">
					<section className="background-project-section">
						<h4>Overview</h4>
						<p>{project.description}</p>
					</section>

					<section className="background-project-section">
						<h4>System</h4>
						<p>{project.system}</p>
					</section>

					<section className="background-project-section">
						<h4>My contribution</h4>
						<p>{project.contribution}</p>
					</section>

					<section className="background-project-section">
						<h4>Focus</h4>
						<p>{project.focus.join(" · ")}</p>
					</section>

					<p className="background-project-publication">
						{project.publication}{" "}
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="portfolio-link"
						>
							View paper
						</a>
					</p>
				</div>
			</div>
		</details>
	);
}

export default function BackgroundPage() {
	return (
		<main className="research-main">
			<div className="research-container">
				<header className="work-intro work-page-fade">
					<h1>Background</h1>
					<p>
						A closer look at the projects, research, and experience
						that shaped my work.
					</p>
				</header>

				<section className="background-section">
					<details className="background-details" open>
						<summary className="background-summary">
							Projects &amp; Research
						</summary>

						<div className="background-content">
							{projects.map((project) => (
								<ProjectRow
									key={project.title}
									project={project}
								/>
							))}
						</div>
					</details>
				</section>

				<section className="background-section">
					<details className="background-details">
						<summary className="background-summary">
							Internships
						</summary>

						<div className="background-content">
							{internships.map((internship) => (
								<article
									key={internship.title}
									className="background-item"
								>
									<div className="background-item-heading">
										<div>
											<h3 className="background-item-title">
												{internship.title}
											</h3>

											<p className="background-item-role">
												{internship.role}
											</p>
										</div>

										<p className="background-item-date">
											{internship.date}
										</p>
									</div>

									<p className="background-item-description">
										{internship.description}
									</p>
								</article>
							))}
						</div>
					</details>
				</section>

				<section className="background-section">
					<details className="background-details">
						<summary className="background-summary">
							Certifications
						</summary>

						<div className="background-content">
							{certifications.map((certification) => (
								<article
									key={certification.title}
									className="background-certification"
								>
									<span className="background-certification-title">
										{certification.title}
									</span>

									<span className="background-certification-meta">
										{certification.issuer} ·{" "}
										{certification.date}
									</span>
								</article>
							))}
						</div>
					</details>
				</section>
			</div>
		</main>
	);
}