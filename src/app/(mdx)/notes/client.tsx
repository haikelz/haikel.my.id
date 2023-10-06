"use client";

import { Notes } from "contentlayer/generated";
import { Searcher } from "fast-fuzzy";
import { useDeferredValue, useMemo, useState } from "react";
import { SearchInput } from "~ui/inputs";
import { NotesList } from "~ui/lists";
import { Paragraph } from "~ui/typography";

type SearcherType = Searcher<
  Notes,
  {
    keySelector: (obj: Notes) => string;
  }
>;

export default function NotesClient({ notes }: { notes: Notes[] }) {
  const [search, setSearch] = useState<string>("");

  const deferredSearch = useDeferredValue<string>(search);

  const filteredNotes = useMemo(() => {
    /**
     * Fuzzy search with fast-fuzzy
     * @see https://github.com/EthanRutherford/fast-fuzzy
     */
    const searcher: SearcherType = new Searcher(notes, {
      keySelector: (obj) => obj.title.toLowerCase(),
    });

    // if user haven't input anything yet, then return all notes
    if (deferredSearch.toLowerCase() === "") return notes;

    // and if user already input something, then do fuzzy search
    return searcher.search(deferredSearch.toLowerCase());
  }, [deferredSearch, notes]);

  return (
    <>
      <SearchInput search={search} setSearch={setSearch} />
      {filteredNotes.length ? (
        <section className="mb-10 flex w-full flex-col space-y-8">
          <NotesList filteredNotes={filteredNotes} search={search} />
        </section>
      ) : (
        <Paragraph data-cy="not-found-note" className="font-semibold">
          The note that you search is not found!
        </Paragraph>
      )}
    </>
  );
}
