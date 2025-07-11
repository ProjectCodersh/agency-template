import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import DropDown from "./DropDown";

const Nav = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <ul className={`cs_nav_list ${mobileToggle ? "active" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={() => setMobileToggle(false)}
            className={currentPath === "/" ? "active" : ""}
          >
            Unlimited Wordpress
          </Link>
        </li>
        <li>
          <Link
            to="/unlimited-shopify"
            onClick={() => setMobileToggle(false)}
            className={currentPath === "/unlimited-shopify" ? "active" : ""}
          >
            Unlimited Shopify
          </Link>
        </li>

        <li>
          <Link
            to="/case-study"
            onClick={() => setMobileToggle(false)}
            className={currentPath === "/case-study" ? "active" : ""}
          >
            Case Study
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            onClick={() => setMobileToggle(false)}
            className={currentPath === "/pricing" ? "active" : ""}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            onClick={() => setMobileToggle(false)}
            className={currentPath === "/contact-us" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
