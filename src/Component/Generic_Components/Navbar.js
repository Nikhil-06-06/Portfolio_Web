import React from "react";
import { useTheme } from "../../Context/context";
import { themeValues } from "../../Constants/GeneralConstants";
import { isDarkMode } from "../../utils/utilities";
import { navItems } from "../../Constants/GeneralConstants";
import { Images } from "../../assets/Images";

function Navbar() {
  const theme = useTheme();

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

  const getNavList = () => {
    return (
      <div className="desktop-nav">
        {navItems.map((item, index) => (
          <a className="nav-item" key={index} href={`#${item}`}>
            {item}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="navbar lighter-dark-bg">
      <img className="h-24" src={Images.portfolio} alt="portfolio" />
      <div>
        {getNavList()}
        {getThemeSwitch()}
      </div>
    </div>
  );
}

export default Navbar;
