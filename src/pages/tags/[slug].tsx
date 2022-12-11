import { Underline } from "@/components/atoms/underline";
import ListNotes from "@/components/organisms/listNotes";
import Layout from "@/components/templates/layout";
import { getAllNotes } from "@/helpers/getAllNotes";
import { Note, Tag } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

export const getStaticPaths: GetStaticPaths = async () => {
  const notes: Note[] = getAllNotes();
  const tags: Set<string> = new Set(notes.map((note) => note.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const notes = getAllNotes().filter((note) => note.meta.tags.includes(slug));

  return {
    props: {
      slug,
      notes: notes.map((note) => note.meta),
    },
  };
};

const Tags = ({ slug, notes }: Tag) => {
  return (
    <>
      <NextSeo title={`Tags #${slug}`} description="Tags" />
      <Layout className="flex min-h-screen flex-col items-center justify-start px-4 pt-6 pb-12 md:pt-24">
        <div className="mb-10 flex w-full flex-wrap items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="title-font mb-1 text-center text-3xl font-bold">Tags #{slug}</h1>
            <Underline />
          </div>
        </div>
        <ListNotes notes={notes} />
      </Layout>
    </>
  );
};

export default Tags;
