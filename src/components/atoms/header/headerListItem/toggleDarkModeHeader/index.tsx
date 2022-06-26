import { components } from "@/src/types";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleDarkModeHeader = ({ changeTheme, theme }: components) => {
  return (
    <button
      aria-label="toggle Dark Mode"
      type="button"
      className=""
      onClick={changeTheme}
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ToggleDarkModeHeader;
