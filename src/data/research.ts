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

export interface SelectedProject {
	shortTitle: string;
	title: string;
	organization: string;
	date: string;
	status: string;
	description: string;
	contribution: string;
	focusAreas: string[];
	resources: ResearchResource[];
	image: string;
	imageAlt: string;
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

export const selectedProjects: SelectedProject[] = [
	{
		shortTitle: "Autonomous Laboratory",
		title: "Autonomous Robotic System for Autonomous Laboratory",
		organization: "Carnegie Mellon University - MRSD",
		date: "2026-2028",
		status: "Ongoing",
		description:
			"Developing an autonomous robotic system capable of performing multiple laboratory workflows rather than a single fixed experiment. The system aims to connect perception, planning, manipulation, verification, and logging into reusable closed-loop workflows.",
		contribution:
			"Current work is focused on developing a general-purpose laboratory automation system that can support multiple experiments and workflows. Stretch goals include greater closed-loop autonomy and mechanistic interpretability of vision-language-action models.",
		focusAreas: [
			"Perception",
			"Navigation",
			"Manipulation",
			"Task Planning",
			"Closed-loop Automation",
			"VLA Interpretability",
		],
		resources: [],
		image: "/images/projects/autonomous-laboratory.jpg",
		imageAlt: "Autonomous laboratory robotics project",
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
		venue:
			"Indonesian Journal of Electrical Engineering and Computer Science",
		date: "2025",
		datePublished: "2025-05",
		identifier: "10.11591/ijeecs.v38.i2.pp997-1009",
		description:
			"Extended a single-camera DeepSORT tracking system to multiple cameras, with MySQL-based communication for transferring track information between cameras. The team also modified DeepSORT to improve identity preservation during occlusion.",
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
			"Collaborated on a decentralized document storage and authentication system using blockchain, NFTs, and IPFS, with primary involvement in validating the system and its document authentication workflow.",
		image: "/images/projects/blockchain-document-storage.jpg",
		imageAlt:
			"Decentralized document storage using blockchain technology",
		resources: [
			{
				label: "Paper",
				href: "https://doi.org/10.1109/CSITSS64042.2024.10816830",
			},
		],
	},
];