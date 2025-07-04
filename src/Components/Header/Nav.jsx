import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      {/* <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
                Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
                Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      {/* <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setMobileToggle(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
                Faq
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/project" onClick={() => setMobileToggle(false)}>
          Project
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
                Project
              </Link>
            </li>
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
                Project Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}


      {/* <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
          Unlimited Wp
        </Link>
      </li>
      <li>
        <Link to="/home2" onClick={() => setMobileToggle(false)}>
          Unlimited Shopify
        </Link>
      </li> */}
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
                Unlimited Wp
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
                Unlimited Shopify
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link >Solutions</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/solutions/business-directory" onClick={() => setMobileToggle(false)}>
                Business Directory
              </Link>
            </li>
            <li>
              <Link to="/solutions/it-digital-agency" onClick={() => setMobileToggle(false)}>
                It Digital Agency
              </Link>
            </li>
            <li>
              <Link to="/solutions/credit-repair" onClick={() => setMobileToggle(false)}>
                Credit Repair
              </Link>
            </li>
            <li>
              <Link to="/solutions/wine-store" onClick={() => setMobileToggle(false)}>
                Wine Store
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link >Case Studies</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/case-studies/reinventu" onClick={() => setMobileToggle(false)}>
                ReinventU
              </Link>
            </li>
            <li>
              <Link to="/case-studies/chez-omar" onClick={() => setMobileToggle(false)}>
                Chez Omar
              </Link>
            </li>
            <li>
              <Link to="/case-studies/madame-f" onClick={() => setMobileToggle(false)}>
                Madame F
              </Link>
            </li>
            <li>
              <Link to="/case-studies/liberation-cocktails" onClick={() => setMobileToggle(false)}>
                Libration Coctail
              </Link>
            </li>
            <li>
              <Link to="/case-studies/avn-hunks" onClick={() => setMobileToggle(false)}>
                Van Hunks
              </Link>
            </li>
            <li>
              <Link to="/case-studies/pa-mi-gente" onClick={() => setMobileToggle(false)}>
                Pa Mi Gente
              </Link>
            </li>
            <li>
              <Link to="/case-studies/stellar-credit" onClick={() => setMobileToggle(false)}>
                Stellar Credit
              </Link>
            </li>
            <li>
              <Link to="/case-studies/bergbate" onClick={() => setMobileToggle(false)}>
                Bergbat
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
