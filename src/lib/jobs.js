import { readMdCollection } from "./md-collection";

export async function getJobs() {
  return await readMdCollection("content/work");
}
