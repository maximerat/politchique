import { candidats, cheminCandidat } from "#shared/candidats";

const routes = [
  "/",
  "/a-propos",
  "/about",
  "/pour-qui-voter",
  "/primaires",
  ...candidats.map((candidat) => cheminCandidat(candidat.id)),
].sort((a, b) => a.localeCompare(b));

function getSiteUrl(event: Parameters<typeof getRequestURL>[0]) {
  const configuredUrl = useRuntimeConfig(event).public.siteUrl;

  if (typeof configuredUrl === "string" && configuredUrl.length > 0) {
    return configuredUrl.replace(/\/$/, "");
  }

  const requestUrl = getRequestURL(event);

  return `${requestUrl.protocol}//${requestUrl.host}`;
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export default defineEventHandler(async (event) => {
  const siteUrl = getSiteUrl(event);
  const today = new Date().toISOString().slice(0, 10);

  const urls = routes
    .map((route) => {
      const location = route === "/" ? siteUrl : `${siteUrl}${route}`;

      return [
        "  <url>",
        `    <loc>${escapeXml(location)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  setHeader(event, "content-type", "application/xml; charset=utf-8");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
  ].join("\n");
});
