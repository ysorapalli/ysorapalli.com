"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";

import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
	const pathname = usePathname();
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 40);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Background", href: "/background/" },
	];

	const isHome = pathname === "/";
	const showName = !isHome || hasScrolled;

	return (
		<header className="secondary-header work-page-fade">
			<div className="secondary-header-inner">
				<Link
					href="/"
					className="secondary-brand portfolio-link"
					aria-label="Yashasvi Sorapalli — Home"
					title="Home"
				>
					<FiHome aria-hidden="true" />

					{showName ? (
						<span className="secondary-brand-name">
							Yashasvi Sorapalli
						</span>
					) : null}
				</Link>

				<div className="secondary-header-actions">
					<nav
						className="secondary-nav"
						aria-label="Primary navigation"
					>
						{navItems.map((item) => {
							const isCurrent =
								item.href === "/"
									? pathname === "/"
									: pathname.startsWith(item.href);

							return (
								<Link
									key={item.href}
									href={item.href}
									className="secondary-nav-link portfolio-link"
									aria-current={
										isCurrent ? "page" : undefined
									}
								>
									{item.label}
								</Link>
							);
						})}
					</nav>

					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}