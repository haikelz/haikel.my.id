"use client";

import Link from "next/link";
import Main from "~ui/Main";
import { Heading, Paragraph } from "~ui/typography";

export default function ErrorPage() {
  return (
    <Main className="flex min-h-screen flex-col items-center justify-center text-center">
      <section className="flex flex-col items-center">
        <Heading as="h1">500 🤖</Heading>
        <Paragraph className="mt-2 font-semibold">
          Looks like there is a problem with the server. Try again!{" "}
          <Link href="/" className="font-bold underline decoration-dashed underline-offset-4">
            Back to Home
          </Link>
        </Paragraph>
      </section>
    </Main>
  );
}
