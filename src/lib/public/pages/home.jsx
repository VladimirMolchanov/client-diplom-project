import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import SectionHome from "../components/sectionHome";
import SectionSponsor from "../components/sectionSponsor";
import SectionSpecs from "../components/sectionSpecs";
import SectionCase from "../components/sectionCase";
import SectionDiscount from "../components/sectionDiscount";
import SectionProducts from "../components/sectionProducts";

const Home = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2500,
            delay: 400
        });

        sr.reveal(`.home__header, .section__title`, {
            delay: 600
        });

        sr.reveal(`.home__footer`, {
            delay: 700
        });

        sr.reveal(`.home__img`, {
            delay: 900,
            origin: "top"
        });

        sr.reveal(
            `.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,
            {
                origin: "top",
                interval: 100
            }
        );

        sr.reveal(`.specs__data, .discount__animate`, {
            origin: "left",
            interval: 100
        });
        sr.reveal(`.specs__img, .discount__img`, {
            origin: "right"
        });

        sr.reveal(`.case__img`, {
            origin: "top"
        });

        sr.reveal(`.case__data`, {
            origin: "top"
        });
    }, []);
    return (
        <>
            <SectionHome />
            <SectionSponsor />
            <SectionSpecs />
            <SectionCase />
            <SectionDiscount />
            <SectionProducts />
        </>
    );
};

export default Home;
