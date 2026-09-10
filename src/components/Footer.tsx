const footerLinks = [
	{ label: "Resume", href: "/data/YashasviSorapalli-Resume.pdf" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/yashasvi-s/" },
	{
		label: "Scholar",
		href: "https://scholar.google.com/citations?user=qdXeEYEAAAAJ&hl=en",
	},
];

export default function Footer() {
	return (
		<footer className="secondary-footer work-page-fade">
			<div className="secondary-footer-inner">
				<p>&copy; {new Date().getFullYear()} Yashasvi Sorapalli</p>
				<nav className="secondary-footer-links" aria-label="Additional links">
					{footerLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="secondary-footer-link portfolio-link"
						>
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</footer>
	);
}
