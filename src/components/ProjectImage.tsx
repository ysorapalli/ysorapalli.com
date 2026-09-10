"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

interface ProjectImageProps {
	src: string;
	alt: string;
}

export default function ProjectImage({
	src,
	alt,
}: ProjectImageProps) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) {
			document.body.style.overflow = "";
			return;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = "";
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	return (
		<>
			<button
				type="button"
				className="portfolio-project-image-button"
				onClick={() => setIsOpen(true)}
				aria-label={`Enlarge image: ${alt}`}
			>
				<Image
					src={src}
					alt={alt}
					width={1200}
					height={675}
					className="portfolio-project-image"
				/>
			</button>

			{isOpen ? (
				<div
					className="portfolio-image-lightbox"
					role="dialog"
					aria-modal="true"
					aria-label={alt}
					onClick={() => setIsOpen(false)}
				>
					<button
						type="button"
						className="portfolio-image-lightbox-close"
						onClick={() => setIsOpen(false)}
						aria-label="Close image"
					>
						<FiX aria-hidden="true" />
					</button>

					<div
						className="portfolio-image-lightbox-content"
						onClick={(event) => event.stopPropagation()}
					>
						<Image
							src={src}
							alt={alt}
							width={1600}
							height={900}
							quality={95}
							className="portfolio-image-lightbox-image"
						/>
					</div>
				</div>
			) : null}
		</>
	);
}