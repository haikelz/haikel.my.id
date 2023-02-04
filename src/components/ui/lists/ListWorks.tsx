import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";
import { spaceGrotesk } from "~lib/utils/fonts";
import { WorksProps } from "~types";
import { GithubIcon, PreviewIcon } from "~ui/icons";
import { Paragraph } from "~ui/typography";

const ListWorks = ({ works }: WorksProps) => {
  return (
    <>
      {works.map((work, index) => (
        <div
          className={twJoin(
            "cursor-pointer overflow-hidden border-[2.5px]",
            "border-black bg-azure transition-all ease-in-out",
            "hover:shadow-light active:scale-95",
            "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
          )}
          key={index + 1}
        >
          <div className="px-6 pb-6 pt-3">
            <div className="my-2">
              <Link href={`/works/${work.slug}`} passHref aria-label={work.title}>
                <span className={twMerge("text-xl font-bold", spaceGrotesk.className)}>
                  {work.title}
                </span>
              </Link>
            </div>
            <Paragraph className="mb-2" isCenter={false}>
              {work.description}
            </Paragraph>
            <div className={twMerge("mt-3 flex space-x-2 font-medium", spaceGrotesk.className)}>
              {work.tags.map((techstack, index) => (
                <span
                  key={index + 1}
                  className={twJoin(
                    "bg-celedongreen px-1.5 text-sm text-white",
                    "dark:bg-lightgray dark:text-slate-900"
                  )}
                >
                  {techstack}
                </span>
              ))}
            </div>
            <div className="mt-3 flex justify-end">
              {work.repo ? <GithubIcon link={work.repo} /> : null}
              {work.preview ? <PreviewIcon link={work.preview} /> : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListWorks;
