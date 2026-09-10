import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import { absoluteUrl, personReference, site } from "@/data/site";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ProfilePage",
						"@id": `${site.url}/#profile-page`,
						url: `${site.url}/`,
						name: site.name,
						description: site.description,
						mainEntity: {
							...personReference,
							givenName: "Yashasvi",
							familyName: "Sorapalli",
							url: `${site.url}/`,
							description: site.description,
							image: {
								"@type": "ImageObject",
								contentUrl: absoluteUrl(site.image),
								width: 900,
								height: 900,
							},
							jobTitle: "M.S. Student in Robotic Systems Development",
							affiliation: {
								"@type": "CollegeOrUniversity",
								name: "Carnegie Mellon University",
								url: "https://www.cmu.edu/",
							},
							alumniOf: {
								"@type": "CollegeOrUniversity",
								name: "R.V. College of Engineering",
								url: "https://rvce.edu.in/",
							},
							homeLocation: {
								"@type": "Place",
								name: "Pittsburgh, Pennsylvania, United States",
							},
							knowsAbout: [
								"Deep learning",
								"Computer vision",
								"Robot autonomy",
								"Robot mobility",
								"Quantum computing",
							],
							sameAs: site.socialProfiles,
						},
					}),
				}}
			/>
			<HomePageClient />
		</>
	);
}
