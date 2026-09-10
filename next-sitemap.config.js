const siteUrl = "https://example.com";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl,

	trailingSlash: true,

	generateRobotsTxt: true,

	generateIndexSitemap: false,

	autoLastmod: false,

	exclude: ["/work", "/projects", "/publications", "/teaching"],

	transform: async (_config, path) => ({
		loc: path,
	}),
};