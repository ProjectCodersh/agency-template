import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <nav className={`cs_nav ${mobileToggle ? "active" : ""}`}>
      <ul className="cs_nav_list">
        <li>
          <NavLink
            to="/"
            onClick={() => setMobileToggle(false)}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Unlimited Wordpress

          </NavLink>
        </li>
        <li>
          <NavLink
            to="/unlimited-shopify"
            onClick={() => setMobileToggle(false)}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Unlimited Shopify

          </NavLink>
        </li>
        <li>
          <NavLink
            to="/case-study"
            onClick={() => setMobileToggle(false)}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Case Studies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            onClick={() => setMobileToggle(false)}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            onClick={() => setMobileToggle(false)}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
