import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BreadCumb from "../Components/Common/BreadCumb";
const Section1 = lazy(() => import("../Components/BrandsDetail/Section1"));
const Section2 = lazy(() => import("../Components/BrandsDetail/Section2"));
const Content = lazy(() => import("../Components/BrandsDetail/Content"));
const Section3 = lazy(() => import("../Components/BrandsDetail/Section3"));
const VideoTestimonialSlickSecond = lazy(() => import("../Components/Testimonial/VideoTestimonialTwo"));
import { brandList } from "../Components/BrandsDetail/BrandList";


const BrandDetailsPage = () => {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/assets/data/brands/${slug}.json`)
            .then((res) => setData(res.data[0]))
            .catch((err) => {
                console.error("Failed to load brand data", err);
                setData(null);
            })
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) return <div className="p-4">Loading...</div>;
    if (!data) return <div className="p-4">No data available for `{slug}`.</div>;

    const brandFromList = brandList.find((item) => item.slug === slug);
    const dynamicTitle = brandFromList?.title || "Brand Details";



    return (
        <>
            <BreadCumb
                bgimg={brandFromList?.BgImg || "/assets/img/breadcrumb.jpg"}
                Title={dynamicTitle}
                hasOverlay={true}
                customTrail={[
                    { label: "Brands", link: "/brands" },
                    { label: dynamicTitle },
                ]}
            />
            <Suspense fallback={<div>Loading Content...</div>}>
                <Section1 data={data} />
                <Section2 data={data.video} />
                <Content challenge={data.challenge} solution={data.solution} />
                <Section3 images={data.images} />
                <VideoTestimonialSlickSecond />
            </Suspense>
        </>
    );
};

export default BrandDetailsPage;
