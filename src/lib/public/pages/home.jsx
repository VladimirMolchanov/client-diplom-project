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
        const sections = document.querySelectorAll("section[id]");

        function scrollActive() {
            const scrollY = window.pageYOffset;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");

                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ) {
                    document
                        .querySelector(".nav__menu a[href*=" + sectionId + "]")
                        .classList.add("active-link");
                } else {
                    document
                        .querySelector(".nav__menu a[href*=" + sectionId + "]")
                        .classList.remove("active-link");
                }
            });
        }
        window.addEventListener("scroll", scrollActive);
        return () => {
            window.removeEventListener("scroll", scrollActive);
        };
    }, []);

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
