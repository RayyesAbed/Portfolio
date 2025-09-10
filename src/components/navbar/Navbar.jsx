import "./Navbar.css";
import AbedLogo from "/MyLogo.png";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Link, NavLink, useLocation } from "react-router";
import navigationItems from "../../constants/navigationItems";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 1000);
  };

  return (
    <header>
      <Link to="/" id="abed-logo-link">
        <img src={AbedLogo} alt="Abed Logo" id="abed-logo" />
      </Link>
      <nav className={isMenuOpen ? "block" : "hidden"}>
        {navigationItems.map((navItem) => {
          const isActive =
            navItem.path === "/projects"
              ? location.pathname.startsWith("/projects")
              : location.pathname === navItem.path;

          return (
            <div key={navItem.path} className="nav-item-wrapper">
              {isActive && (
                <motion.div
                  className="nav-highlight"
                  layoutId="nav-highlight"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <NavLink
                to={navItem.path}
                className="nav-item"
                onClick={closeMenu}
              >
                {t(navItem.name)}
              </NavLink>
            </div>
          );
        })}
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <DragHandleIcon sx={{ fontSize: "30px" }} />
      </div>
    </header>
  );
};

export default Navbar;
