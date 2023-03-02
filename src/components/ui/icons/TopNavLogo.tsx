import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const TopNavLogo = () => {
  return (
    <div className="gradient -rotate-6">
      <Link
        className={twMerge(
          "cursor-pointer border-none text-xl font-bold",
          "tracking-widest outline-none",
          "transition-all ease-in-out",
          "hover:text-blue-500"
        )}
        href="/"
      >
        ハキム
      </Link>
    </div>
  );
};
