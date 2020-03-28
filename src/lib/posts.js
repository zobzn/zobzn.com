import { readMdCollection } from "./md-collection";

export async function getPosts() {
  return await readMdCollection("content/posts");
}
