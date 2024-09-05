import React, {useState} from "react";
import { useTheme } from "../../Context/context";
import { themeValues } from "../../Constants/GeneralConstants";
import { isDarkMode } from "../../utils/utilities";
import { navItems } from "../../Constants/GeneralConstants";

function Navbar() {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  }

  const showDropdown = (e) => {
    if(!isMenuOpen) {
      document.addEventListener("click", hideDropdown);
    }
    setIsMenuOpen(!isMenuOpen);
    e.stopPropagation();
  };

  const hideDropdown = () => {
    setIsMenuOpen(false);
    document.removeEventListener("click", hideDropdown);
  };

  const getNavMenu = () => {
    return (
      <div className="nav-menu column-flex">
        <div className="menu-container">
          <div className="hamburger-icon" onClick={showDropdown}>{Array(3).fill(0).map(() => <div className="line border" />)}</div>
          {isMenuOpen ? <div style={{ alignItems: 'flex-start' }} className="column-flex nav-list border shadow-effect">
            {navItems.map((item, index) => (
              <a className="nav-item" key={index} href={`#${item}`} onClick={hideDropdown}>
                {item}
              </a>
            ))}
          </div> : null}
        </div>
      </div>
    )
  }

  return (
    <div className="space-div navbar lighter-dark-bg shadow-effect">
      <div>MUI</div>
      <div>
        {getNavList()}
        {getNavMenu()}
        {getThemeSwitch()}
      </div>
    </div>
  );
}

export default Navbar;
