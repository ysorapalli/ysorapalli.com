export interface ResearchAuthor {
	name: string;
	schemaName: string;
	href?: string;
	isYashasvi?: boolean;
}

export interface ResearchResource {
	label: string;
	href: string;
}

export interface ResearchPublication {
	shortTitle: string;
	title: string;
	href: string;
	authors: ResearchAuthor[];
	venue: string;
	date: string;
	datePublished: string;
	identifier: string;
	description: string;
	image: string;
	imageAlt: string;
	resources: ResearchResource[];
}

export interface TeachingExperience {
	course: string;
	href?: string;
	role: string;
	institution: string;
	term: string;
}

export const selectedProjects: ResearchPublication[] = [
	{
		shortTitle: "Autonomous Laboratory",
		title: "Autonomous Laboratory",
		href: "#",
		authors: [
			{
				name: "Yashasvi Sorapalli",
				schemaName: "Yashasvi Sorapalli",
				isYashasvi: true,
			},
		],
		venue: "Carnegie Mellon University — MRSD",
		date: "2026–2028",
		datePublished: "2026-08",
		identifier: "autonomous-laboratory",
		description:
			"Developing an autonomous robotic lab assistant to automate selected last-meter laboratory workflows, connecting perception, navigation, manipulation, and task execution across lab workstations.",
		image: "/images/projects/autonomous-laboratory.jpg",
		imageAlt: "Autonomous Laboratory robotics project",
		resources: [],
	},
];

export const researchPublications: ResearchPublication[] = [
	{
		shortTitle: "Multi-camera Tracking",
		title: "Multi-camera Multi-person Tracking with DeepSORT and MySQL",
		href: "https://ijeecs.iaescore.com/index.php/IJEECS/article/view/37989",
		authors: [
			{
				name: "Yashasvi Sorapalli",
				schemaName: "Yashasvi Sorapalli",
				isYashasvi: true,
			},
		],
		venue: "Indonesian Journal of Electrical Engineering and Computer Science",
		date: "2025",
		datePublished: "2025-05",
		identifier: "10.11591/ijeecs.v38.i2.pp997-1009",
		description:
			"Multi-camera multi-person tracking using DeepSORT with MySQL-based data management.",
		image: "/images/projects/multicamera-tracking.jpg",
		imageAlt: "Multi-camera multi-person tracking project",
		resources: [
			{
				label: "Paper",
				href: "https://ijeecs.iaescore.com/index.php/IJEECS/article/view/37989",
			},
		],
	},
	{
		shortTitle: "Decentralized Document Storage",
		title:
			"Decentralized Document Storage with NFT Authentication Using Blockchain Technology",
		href: "https://doi.org/10.1109/CSITSS64042.2024.10816830",
		authors: [
			{
				name: "Yashasvi Sorapalli",
				schemaName: "Yashasvi Sorapalli",
				isYashasvi: true,
			},
		],
		venue: "IEEE CSITSS",
		date: "2024",
		datePublished: "2024",
		identifier: "10.1109/CSITSS64042.2024.10816830",
		description:
			"Decentralized document storage with NFT-based authentication using blockchain technology.",
		image: "/images/projects/blockchain-document-storage.jpg",
		imageAlt: "Decentralized document storage using blockchain technology",
		resources: [
			{
				label: "Paper",
				href: "https://doi.org/10.1109/CSITSS64042.2024.10816830",
			},
		],
	},
];

