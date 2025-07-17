
import { lazy, Suspense, memo } from 'react';

// Lazy load components for performance
const BreadCumb = lazy(() => import('../Components/Common/BreadCumb'));
const BrandsCards = lazy(() => import('../Components/BrandsCardPage/BrandsCards'));

const BrandsCardpage = () => {
    return (
        <main role="main">
            <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
                <BreadCumb
                    bgimg="/assets/img/breadcrumb.jpg"
                    Title="Brands"
                />
                <BrandsCards />
            </Suspense>
        </main>
    );
};

export default memo(BrandsCardpage);
