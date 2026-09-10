import type { Metadata } from "next";
import { personReference, site } from "@/data/site";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: site.name,
		template: `%s | ${site.name}`,
	},
	description: site.description,
	applicationName: site.name,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	publisher: site.name,
	category: "technology",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: "/favicon.svg",
		apple: "/favicon.svg",
	},
	verification: {
		google: "YI1L3YOtnukh0nVwoZ-TVjTTp9_PN65NylPHNUshHII",
	},
	openGraph: {
		title: site.name,
		description: site.description,
		url: `${site.url}/`,
		siteName: site.name,
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: site.name,
		description: site.description,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="site-body" suppressHydrationWarning>
				{/* WebSite structured data for Google site name. */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							"@id": `${site.url}/#website`,
							name: site.name,
							url: `${site.url}/`,
							alternateName: [
								"ysorapalli.com",
								"Yashasvi Sorapalli",
							],
							author: personReference,
							inLanguage: "en-US",
						}),
					}}
				/>

				<Providers>
					<div className="site-content">{children}</div>
				</Providers>
			</body>
		</html>
	);
}