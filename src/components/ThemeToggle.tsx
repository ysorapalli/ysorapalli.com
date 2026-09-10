"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	const mounted = useSyncExternalStore(
		subscribeToHydration,
		getClientHydrationSnapshot,
		getServerHydrationSnapshot,
	);

	if (!mounted) {
		return (
			<button
				type="button"
				className="portfolio-theme-toggle"
				aria-label="Toggle color theme"
				title="Toggle color theme"
				disabled
			/>
		);
	}

	const isDark = resolvedTheme === "dark";
	const targetTheme = isDark ? "light" : "dark";

	const accessibleLabel = `Switch to ${targetTheme} theme`;

	return (
		<button
			type="button"
			onClick={() => setTheme(targetTheme)}
			className="portfolio-theme-toggle"
			aria-label={accessibleLabel}
			title={accessibleLabel}
		>
			{isDark ? (
				<FiSun
					aria-hidden="true"
					className="portfolio-theme-icon"
				/>
			) : (
				<FiMoon
					aria-hidden="true"
					className="portfolio-theme-icon"
				/>
			)}
		</button>
	);
}