import { site } from "../lib/site";
export const dynamic = "force-static";
export default function sitemap() {
  return [{ url: `${site.url}/`, changeFrequency: "weekly", priority: 1 }];
}
