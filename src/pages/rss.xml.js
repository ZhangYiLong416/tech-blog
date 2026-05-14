import rss from "@astrojs/rss";
import { SITE, withBase } from "../consts";
import { getPublishedPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: withBase(`/posts/${post.id}/`)
    }))
  });
}
