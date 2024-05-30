import React from "react";
import { useTheme } from "../Context/context";
import { themeValues } from "../Constants/GeneralConstants";
import { isDarkMode } from "../utils/utilities";

function Navbar() {
  const theme = useTheme();
  const navItems = ["home", "about me", "projects"];
  console.log(theme);
  const getThemeSwitch = () => {
    return (
      <div className="theme-switch-box">
        <div
          className={`theme-switch ${
            isDarkMode(theme.theme, themeValues) ? "slideRight" : "slideLeft"
          }`}
          onClick={theme.toggleTheme}
        >
          {theme.theme.toUpperCase()}
        </div>
      </div>
    );
  };

  return (
    <div className="space-div navbar">
      <div>MUI</div>
      <div>
        <div>
          {navItems.map((item) => (
            <div className="nav-item" key={item}>
              {item}
            </div>
          ))}
        </div>
        {getThemeSwitch()}
      </div>
    </div>
  );
}

export default Navbar;
