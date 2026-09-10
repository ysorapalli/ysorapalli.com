"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

import Navbar from "@/components/Navbar";
import PublicationAuthors from "@/components/PublicationAuthors";

import {
	researchPublications,
	selectedProjects,
	type ResearchPublication,
} from "@/data/research";

import { FiFileText, FiMapPin } from "react-icons/fi";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

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

function SelectedPublicationRow({
	publication,
	index,
}: {
	publication: ResearchPublication;
	index: number;
}) {
	return (
		<article
			className="portfolio-work-item portfolio-fade"
			style={{ animationDelay: `${340 + index * 45}ms` }}
		>
			<a
				href={publication.href}
				target="_blank"
				rel="noopener noreferrer"
				className="portfolio-work-media"
				aria-label={`View ${publication.title}`}
			>
				<Image
					src={publication.image}
					alt={publication.imageAlt}
					width={800}
					height={500}
					quality={90}
					loading={index === 0 ? "eager" : "lazy"}
					sizes="(max-width: 599px) calc(100vw - 48px), 196px"
					className="portfolio-work-image"
				/>
			</a>

			<div className="portfolio-work-copy">
				<h3 className="portfolio-work-title">
					<TextLink href={publication.href}>
						{publication.title}
					</TextLink>
				</h3>

				<PublicationAuthors
					authors={publication.authors}
					className="portfolio-work-authors"
				/>

				<p className="portfolio-work-venue">
					{publication.venue}, {publication.date}
				</p>

				<nav
					className="portfolio-work-resources"
					aria-label={`${publication.shortTitle} resources`}
				>
					{publication.resources.map(
						(resource, resourceIndex) => (
							<span
								key={resource.label}
								className="portfolio-work-resource-item"
							>
								<TextLink href={resource.href}>
									{resource.label}
								</TextLink>

								{resourceIndex <
								publication.resources.length - 1 ? (
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

				<p className="portfolio-work-description">
					{publication.description}
				</p>
			</div>
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
									href="https://www.cmu.edu/"
									iconSrc="/images/organizations/cmu.svg"
								>
									Master of Science in Robotic
									Systems Development
								</OrganizationLink>{" "}
								program at Carnegie Mellon University.
								I&apos;m interested in building robotic
								systems that can perceive, understand,
								and act in the physical world, with a
								focus on robotics software, perception,
								and autonomy.
							</p>

							<p className="portfolio-p portfolio-contact-copy">
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
							Current projects
						</h2>

						<div className="portfolio-work-list">
							{selectedProjects.map((publication, index) => (
								<SelectedPublicationRow
									key={publication.title}
									publication={publication}
									index={index}
								/>
							))}
						</div>

						<div
							className="portfolio-more-content portfolio-fade"
							style={{ animationDelay: "500ms" }}
						>
							<a
								href="/background/"
								className="portfolio-previous-work-link"
							>
								<span>
									<strong>Background</strong>
								</span>

								<span
									className="portfolio-previous-work-arrow"
									aria-hidden="true"
								>
									→
								</span>
							</a>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}