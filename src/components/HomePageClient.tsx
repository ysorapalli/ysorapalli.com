"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

import Navbar from "@/components/Navbar";
import {
	researchPublications,
	selectedProjects,
	type SelectedProject,
} from "@/data/research";

import { FiFileText, FiMapPin } from "react-icons/fi";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import ProjectImage from "@/components/ProjectImage";

const previousExperience = [
	{
		title: "Carnegie Mellon University",
		href: "https://www.cmu.edu/",
		iconSrc: "/images/organizations/cmu.svg",
		role: "M.S. in Robotic Systems Development",
		date: "2026-2028",
	},
	{
		title: "Visa",
		href: "https://www.visa.com/",
		iconSrc: "/images/organizations/visa.svg",
		role: "Software Engineer",
		date: "2025-2026",
	},
	{
		title: "BT Group",
		href: "https://www.bt.com/",
		iconSrc: "/images/organizations/bt.svg",
		role: "Software Engineering Intern & Full-Time Professional",
		date: "2024-2025",
	},
	{
		title: "R.V. College of Engineering",
		href: "https://www.rvce.edu.in/",
		iconSrc: "/images/organizations/rvce.svg",
		role: "B.E. in Computer Science",
		date: "2020-2024",
	},
];

const profileLinks = [
	{
		label: "Resume",
		href: "/data/YashasviSorapalli-Resume.pdf",
	},
	{
		label: "GitHub",
		href: "https://github.com/ysorapalli",
	},
	{
		label: "Scholar",
		href: "https://scholar.google.com/citations?user=qdXeEYEAAAAJ&hl=en",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/yashasvi-s/",
	},
];

const skills = [
	"Python",
	"C++",
	"Java",
	"ROS",
	"Springboot",
	"Linux",
	"MySQL",
	"Deep Learning",
];

const contactEmail = "ysorapalli@gmail.com";

function TextLink({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="portfolio-link"
		>
			{children}
		</a>
	);
}

function OrganizationLink({
	href,
	iconSrc,
	children,
}: {
	href: string;
	iconSrc: string;
	children: ReactNode;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="portfolio-organization-link"
		>
			<Image
				src={iconSrc}
				alt=""
				aria-hidden="true"
				width={16}
				height={16}
				unoptimized
				className="portfolio-organization-mark"
			/>

			<span className="portfolio-link portfolio-organization-name">
				{children}
			</span>
		</a>
	);
}

function ExperienceRow({
	title,
	href,
	iconSrc,
	role,
	date,
	index,
}: {
	title: string;
	href: string;
	iconSrc: string;
	role: string;
	date: string;
	index: number;
}) {
	return (
		<article
			className="portfolio-experience-row portfolio-fade"
			style={{ animationDelay: `${160 + index * 45}ms` }}
		>
			<h3 className="portfolio-row-title">
				<OrganizationLink href={href} iconSrc={iconSrc}>
					{title}
				</OrganizationLink>
			</h3>

			<p className="portfolio-row-role">{role}</p>
			<p className="portfolio-row-date">{date}</p>
		</article>
	);
}

function SelectedProjectRow({
	project,
	index,
}: {
	project: SelectedProject;
	index: number;
}) {
	return (
		<article
			className="portfolio-project-item portfolio-fade"
			style={{ animationDelay: `${340 + index * 45}ms` }}
		>
			<div className="portfolio-project-heading">
				<h3 className="portfolio-project-title">{project.title}</h3>

				<span className="portfolio-project-status">
					{project.status}
				</span>
			</div>

			<p className="portfolio-project-meta">
				{project.organization}, {project.date}
			</p>

			<ProjectImage
				src={project.image}
				alt={project.imageAlt}
			/>

			<p className="portfolio-project-description">
				{project.description}
			</p>

			<p className="portfolio-project-contribution">
				<strong>Focus:</strong> {project.contribution}
			</p>

			{project.focusAreas.length > 0 ? (
				<div className="portfolio-project-focus">
					<span className="portfolio-project-focus-label">
						Areas
					</span>

					{project.focusAreas.map((area) => (
						<span
							key={area}
							className="portfolio-project-focus-item"
						>
							{area}
						</span>
					))}
				</div>
			) : null}

			{project.resources.length > 0 ? (
				<nav
					className="portfolio-project-resources"
					aria-label={`${project.shortTitle} resources`}
				>
					{project.resources.map(
						(resource, resourceIndex) => (
							<span
								key={resource.label}
								className="portfolio-project-resource"
							>
								<TextLink href={resource.href}>
									{resource.label}
								</TextLink>

								{resourceIndex <
									project.resources.length - 1 ? (
									<span
										className="portfolio-work-resource-separator"
										aria-hidden="true"
									>
										{" / "}
									</span>
								) : null}
							</span>
						),
					)}
				</nav>
			) : null}
		</article>
	);
}

export default function HomePageClient() {
	const [copyState, setCopyState] = useState<
		"idle" | "copied" | "failed"
	>("idle");

	useEffect(() => {
		if (copyState === "idle") {
			return;
		}

		const timeout = window.setTimeout(
			() => setCopyState("idle"),
			2000,
		);

		return () => window.clearTimeout(timeout);
	}, [copyState]);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(contactEmail);
			setCopyState("copied");
		} catch {
			setCopyState("failed");
		}
	};

	return (
		<>
			<Navbar />

			<main className="portfolio-site">
				<div className="portfolio-container portfolio-fade portfolio-fade-one">
					<header className="portfolio-intro">
						<div className="portfolio-identity">
							<div className="portfolio-identity-copy">
								<h1 className="portfolio-h1">
									Yashasvi Sorapalli
								</h1>

								<p className="portfolio-location">
									<FiMapPin aria-hidden="true" />
									<span>
										Pittsburgh, Pennsylvania,
										United States
									</span>
								</p>
							</div>

							<Image
								src="/images/YashasviSorapalliPic-optimized.jpg"
								alt="Portrait of Yashasvi Sorapalli"
								width={88}
								height={88}
								quality={90}
								priority
								className="portfolio-profile-image"
							/>
						</div>

						<div className="portfolio-fade portfolio-fade-two">
							<p className="portfolio-p">
								I&apos;m a graduate student in the{" "}
								<OrganizationLink
									href="https://mrsd.ri.cmu.edu/"
									iconSrc="/images/organizations/cmu-ri.svg"
								>
									Master of Science in Robotic
									Systems Development
								</OrganizationLink>{" "}
								program at Carnegie Mellon University.
								I&apos;m interested in building robotic
								systems that can perceive, understand,
								and act in the physical world, with a
								focus on closed loop autonomy (robots working without regular inputs froms humans!).
							</p>

							<p className="portfolio-focus">
								Robotics Software · Perception · Autonomy
							</p>

							<p className="portfolio-contact-copy">
								You can reach me at{" "}
								<span className="portfolio-copy-email">
									<button
										type="button"
										className="portfolio-link portfolio-copy-button"
										onClick={copyEmail}
										aria-label={`Copy ${contactEmail} to clipboard`}
										title="Copy email address"
									>
										{contactEmail}
									</button>
									.

									<span
										className="portfolio-copy-status"
										role="status"
										aria-live="polite"
										aria-atomic="true"
									>
										{copyState === "copied"
											? "Copied"
											: copyState === "failed"
												? "Copy failed"
												: ""}
									</span>
								</span>
							</p>

							<nav
								className="portfolio-profile-links"
								aria-label="Yashasvi's profiles and contact links"
							>
								{profileLinks.map((link) => {
									const Icon =
										link.label === "Resume"
											? FiFileText
											: link.label === "GitHub"
												? FaGithub
												: link.label === "Scholar"
													? FaGoogle
													: FaLinkedin;

									return (
										<span
											key={link.label}
											className="portfolio-profile-link-item"
										>
											<a
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="portfolio-link portfolio-profile-icon-link"
												aria-label={link.label}
												title={link.label}
											>
												<Icon aria-hidden="true" />
											</a>
										</span>
									);
								})}
							</nav>
						</div>
					</header>

					<section
						className="portfolio-section"
						aria-labelledby="previously-heading"
					>
						<h2
							id="previously-heading"
							className="portfolio-section-label portfolio-fade portfolio-fade-three"
						>
							Experience & Education
						</h2>

						<div className="portfolio-experience-list">
							{previousExperience.map((item, index) => (
								<ExperienceRow
									key={item.title}
									{...item}
									index={index}
								/>
							))}
						</div>
					</section>

					<section
						className="portfolio-section"
						aria-labelledby="skills-heading"
					>
						<h2
							id="skills-heading"
							className="portfolio-section-label portfolio-fade"
						>
							Skills
						</h2>

						<div className="portfolio-skills-list">
							{skills.map((skill) => (
								<span
									key={skill}
									className="portfolio-skill"
								>
									{skill}
								</span>
							))}
						</div>
					</section>

					<section
						className="portfolio-section portfolio-publications-section"
						aria-labelledby="selected-work-heading"
					>
						<h2
							id="selected-work-heading"
							className="portfolio-section-label portfolio-fade"
							style={{ animationDelay: "300ms" }}
						>
							CMU projects
						</h2>

						<div className="portfolio-work-list">
							{selectedProjects.map((project, index) => (
								<SelectedProjectRow
									key={project.title}
									project={project}
									index={index}
								/>
							))}
						</div>
					</section>
				</div>
			</main>
		</>
	);
}