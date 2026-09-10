import type { Metadata } from "next";
import Image from "next/image";
import PublicationAuthors from "@/components/PublicationAuthors";
import { absoluteUrl, personReference, site } from "@/data/site";
import {
	researchPublications,
	type ResearchPublication,
} from "@/data/research";

const researchDescription =
	"Research and publications by Yashasvi Sorapalli in robotics, robot perception, computer vision, and autonomous systems.";

export const metadata: Metadata = {
	title: "Research",
	description: researchDescription,
	alternates: {
		canonical: "/research/",
	},
	openGraph: {
		title: `Research | ${site.name}`,
		description: researchDescription,
		url: `${site.url}/research/`,
		siteName: site.name,
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Research | Yashasvi Sorapalli",
		description: researchDescription,
	},
};

const researchCollectionJsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	"@id": `${site.url}/research/#collection`,
	url: `${site.url}/research/`,
	name: `Research | ${site.name}`,
	description: researchDescription,
	author: personReference,
	mainEntity: {
		"@type": "ItemList",
		numberOfItems: researchPublications.length,
		itemListElement: researchPublications.map((publication, index) => ({
			"@type": "ListItem",
			position: index + 1,
			url: publication.href,
			item: {
				"@type": "ScholarlyArticle",
				headline: publication.title,
				name: publication.shortTitle,
				url: publication.href,
				description: publication.description,
				datePublished: publication.datePublished,
				identifier: publication.identifier,
				image: absoluteUrl(publication.image),
				author: publication.authors.map((author) =>
					author.isYashasvi
						? personReference
						: {
								"@type": "Person",
								name: author.schemaName,
								...(author.href ? { url: author.href } : {}),
							},
				),
			},
		})),
	},
};

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
						<span key={resource.label} className="research-resource-item">
							<a
								href={resource.href}
								target="_blank"
								rel="noopener noreferrer"
								className="portfolio-link research-resource-link"
							>
								{resource.label}
							</a>

							{resourceIndex < publication.resources.length - 1 ? (
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

export default function ResearchPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(researchCollectionJsonLd),
				}}
			/>

			<main className="research-main">
				<div className="research-container">
					<header className="work-intro work-page-fade">
						<h1>Research</h1>
					</header>

					<section aria-labelledby="publications-heading">
						<h2
							id="publications-heading"
							className="secondary-section-label"
						>
							Publications
						</h2>

						<ol className="research-publications">
							{researchPublications.map((publication, index) => (
								<PublicationRow
									key={publication.title}
									publication={publication}
									index={index}
								/>
							))}
						</ol>
					</section>
				</div>
			</main>
		</>
	);
}