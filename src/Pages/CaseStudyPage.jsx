import { lazy, Suspense, memo } from 'react';

// Lazy load components for performance
const BreadCumb = lazy(() => import('../Components/Common/BreadCumb'));
const CaseStudy4 = lazy(() => import('../Components/CaseStudy/CaseStudy4'));

const CaseStudyPage = () => {
  return (
    <main role="main">
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Case studies" />
        <CaseStudy4 />
      </Suspense>
    </main>
  );
};

export default memo(CaseStudyPage);
