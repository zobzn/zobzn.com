import { readMdCollection } from "./md-collection";

const normalizePost = (post) => ({ ...post, draft: !!post.draft });
const publishedPosts = (post) => !post.draft;
const comparePostsByDate = (a, b) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : 0;

export async function getAllPosts() {
  return (await readMdCollection("content/posts"))
    .map(normalizePost)
    .sort(comparePostsByDate);
}

export async function getPublishedPosts() {
  return (await getAllPosts()).filter(publishedPosts);
}
