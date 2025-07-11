// import DropDown from './DropDown';
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
      {/* <li className="menu-item-has-children">
          <Link to="/">Home</Link>
          <DropDown>
            <ul>
              <li>
                <Link to="/" onClick={() => setMobileToggle(false)}>
                  Unlimited Wordpress
                </Link>
              </li>
              <li>
                <Link to="/home2" onClick={() => setMobileToggle(false)}>
                  Unlimited Shopify
                </Link>
              </li>
            </ul>
          </DropDown>
        </li> */}
      {/* <li className="menu-item-has-children">
        <Link to="/">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/our-team" onClick={() => setMobileToggle(false)}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/client-testimonial" onClick={() => setMobileToggle(false)}>
                Testimonials
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      {/* <li className="menu-item-has-children">
        <Link >Services</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/services/figma-to-shopify-migration" onClick={() => setMobileToggle(false)}>
                Figma To Shopify Development
              </Link>
            </li>
            <li>
              <Link to="/services/wordpress-to-shopify-migration" onClick={() => setMobileToggle(false)}>
                Wordpress To Shopify Migration
              </Link>
            </li>
            <li>
              <Link to="/services/onebuilder-site-stabilization" onClick={() => setMobileToggle(false)}>
                One-Builder Site Stabilization
              </Link>
            </li>
            <li>
              <Link to="/services/website-speed-optimization" onClick={() => setMobileToggle(false)}>
                Website Speed Optmization
              </Link>
            </li>
            <li>
              <Link to="/services/malware-&-virus-removal" onClick={() => setMobileToggle(false)}>
                Malware & Virus Removal
              </Link>
            </li>
            <li>
              <Link to="/services/custom-web-development" onClick={() => setMobileToggle(false)}>
                Custom Web Development
              </Link>
            </li>
            <li>
              <Link to="/services/website-redesign" onClick={() => setMobileToggle(false)}>
                Website Redesign
              </Link>
            </li>
            <li>
              <Link to="/services/shift4shop-to-shopify-migration" onClick={() => setMobileToggle(false)}>
                Shift4Shop To Shopify Migration
              </Link>
            </li>
            <li>
              <Link to="/services/go-highlevel-development" onClick={() => setMobileToggle(false)}>
                GoHighLevel Development
              </Link>
            </li>
            <li>
              <Link to="/services/dedicated-resources-for-agencies" onClick={() => setMobileToggle(false)}>
                Dedicated Resources For Agencies
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      {/* <li className="menu-item-has-children">
        <Link to="/" >Solutions</Link>
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
      </li> */}
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
          Unlimited Wordpress
        </Link>
      </li>
      <li>
        <Link to="/home2" onClick={() => setMobileToggle(false)}>
          Unlimited Shopify
        </Link>
      </li>
      <li>
        <Link to="/case-study" onClick={() => setMobileToggle(false)}>
          Case Study
        </Link>
      </li>
      <li>
        <Link to="/contact-us" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
