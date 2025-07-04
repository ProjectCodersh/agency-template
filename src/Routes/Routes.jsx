import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout2 from "../Layout/Layout2";
import Main from "../Layout/Main";
import ContactPage from "../Pages/ContactPage";
import Home4 from "../Pages/Home4";
import ServicesNewPage from "../Pages/ServicesNewPage";
import ServicesNewCards from "../Pages/ServicesNewCardsPage";
import SolutionsPage from "../Pages/SolutionsPage";
import CaseStudyPageNew from "../Pages/CaseStudyPageNew";
// import Casestudies from "../Pages/CaseStudyPageNew";
// import Solutions from "../Pages/Solutions";
// import ServicesPage from "../Pages/ServicesPage";
// import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
// import AboutPage from "../Pages/AboutPage";
// import Home2 from "../Pages/Home2";
// import Home3 from "../Pages/Home3";
// import TeamPage from "../Pages/TeamPage";
// import TeamDetailsPage from "../Pages/TeamDetailsPage";
// import PricingPage from "../Pages/PricingPage";
// import FaqPage from "../Pages/FaqPage";
// import CaseStudyPage from "../Pages/CaseStudyPage";
// import CaseStudyDetailsPage from "../Pages/CaseStudyDetailsPage";
// import BlogRightSidebar from "../Pages/BlogRightSidebar";
// import BlogPage from "../Pages/BlogPage";
// import BlogDetailsPage from "../Pages/BlogDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout2></Layout2>,
    children: [
      // {
      //     path: "/about",
      //     element: <AboutPage></AboutPage>,
      // },
      // {
      //   path: "/team",
      //   element: <TeamPage></TeamPage>,
      // },
      // {
      //   path: "/team/team-details",
      //   element: <TeamDetailsPage></TeamDetailsPage>,
      // },
      // {
      //   path: "/pricing",
      //   element: <PricingPage></PricingPage>,
      // },
      // {
      //   path: "/faq",
      //   element: <FaqPage></FaqPage>,
      // },

      // {
      //   path: "/service",
      //   element: <ServicesPage></ServicesPage>,
      // },
      // {
      //   path: "/service/service-details",
      //   element: <ServiceDetailsPage></ServiceDetailsPage>,
      // },
      // {
      //   path: "/project",
      //   element: <CaseStudyPage></CaseStudyPage>,
      // },
      // {
      //   path: "/project/project-details",
      //   element: <CaseStudyDetailsPage></CaseStudyDetailsPage>,
      // },
      // {
      //   path: "/blog-sidebar",
      //   element: <BlogRightSidebar></BlogRightSidebar>,
      // },
      // {
      //   path: "/blog",
      //   element: <BlogPage></BlogPage>,
      // },
      // {
      //   path: "/blog/blog-details",
      //   element: <BlogDetailsPage></BlogDetailsPage>,
      // },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/services-cards",
        element: <ServicesNewCards></ServicesNewCards>,
      },

      {
        path: "/case-studies/:slug",
        element: <CaseStudyPageNew></CaseStudyPageNew>,
      },
      {
        path: "/solutions/:slug",
        element: <SolutionsPage></SolutionsPage>,
      },

    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/service-new/:slug",
        element: <ServicesNewPage></ServicesNewPage>,
      },
    ],
  },
  {
    path: "home2",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home4></Home4>,
      },
    ],
  },
  // {
  //   path: 'home3',
  //   element: <Layout2></Layout2>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home3></Home3>,
  //     },
  //   ],
  // },
]);
