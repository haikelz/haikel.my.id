import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

import { WORKS_PATH } from "../utils/constants";

export function getWorkFromSlug(slug: string) {
  const workPath: string = join(WORKS_PATH, `${slug}.mdx`);
  const source: Buffer = readFileSync(workPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      id: data.id ?? slug.length,
      author: data.author ?? slug,
      description: data.description ?? "Tidak ada deskripsi",
      title: data.title ?? slug,
      stack: (data.stack ?? []).sort(),
      repo: data.repo ?? null,
      preview: data.preview ?? null,
    },
  };
}
