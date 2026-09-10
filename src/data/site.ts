export const site = {
	name: "Yashasvi Sorapalli",
	url: "https://ysorapalli.com",
	description:
		"Yashasvi Sorapalli is a robotics graduate student at Carnegie Mellon University interested in robotics software, perception, autonomy, and closed-loop intelligent robotic systems.",
	// image: "/images/YashasviSorapalli-Pic.jpg",
	personId: "https://ysorapalli.com/#yashasvi-sorapalli",
	socialProfiles: [
		"https://www.linkedin.com/in/yashasvi-s/",
		"https://github.com/ysorapalli",
		"https://scholar.google.com/citations?user=qdXeEYEAAAAJ&hl=en",
	],
} as const;

export const personReference = {
	"@type": "Person",
	"@id": site.personId,
	name: site.name,
	url: `${site.url}/`,
} as const;

export function absoluteUrl(path: string) {
	return new URL(path, `${site.url}/`).toString();
}
