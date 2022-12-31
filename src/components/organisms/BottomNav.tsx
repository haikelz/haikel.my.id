import { ToggleDarkIcon } from "@/atoms/ToggleDarkIcon";
import { cn } from "@/helpers/cn";
import { useTheme } from "@/hooks/useTheme";
import { bottomNavList } from "@/utils/data";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { IconType } from "react-icons/lib";

const BottomNav = () => {
  const [theme, setTheme] = useTheme();
  const router: NextRouter = useRouter();
  const changeTheme: () => void = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className={`sticky bottom-0 left-0 right-0 flex w-full flex-col items-center justify-center md:hidden`}
    >
      <div className="grid w-full grid-cols-5 grid-rows-1 border-t border-slate-300 bg-antiflashwhite p-4 dark:border-slate-600 dark:bg-eerieblack">
        {bottomNavList.map((item, index) => {
          const Icon: IconType = item.icon;
          return (
            <div key={index + 1} className="flex items-center justify-center">
              <Link href={item.link} aria-label={item.name} passHref>
                <Icon
                  className={cn(
                    "transition-all duration-200",
                    router.asPath === `${item.link}`
                      ? "text-slate-600 dark:text-white"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                  size={28}
                />
              </Link>
            </div>
          );
        })}
        <ToggleDarkIcon theme={theme} changeTheme={changeTheme} />
      </div>
    </nav>
  );
};

export default BottomNav;
