import "./Navbar.css";
import AbedLogo from "/MyLogo.png";
import { Link, NavLink, useLocation } from "react-router";
import navigationItems from "../../constants/navigationItems";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  return (
    <header>
      <Link to="/" id="abed-logo-link">
        <img src={AbedLogo} alt="Abed Logo" id="abed-logo" />
      </Link>
      <nav>
        {navigationItems.map((navItem) => {
          const isActive = location.pathname === navItem.path;
          return (
            <div key={navItem.path} className="nav-item-wrapper">
              {isActive && (
                <motion.div
                  className="nav-highlight"
                  layoutId="nav-highlight"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <NavLink to={navItem.path} className="nav-item">
                {navItem.name}
              </NavLink>
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
