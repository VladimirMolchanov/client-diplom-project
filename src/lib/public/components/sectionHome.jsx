import React from "react";
import confirm from "../../../config.json";
const SectionHome = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div>
                    <img
                        src={confirm.assetsEndpoint + "assets/image/home.png"}
                        alt=""
                        className="home__img"
                    />
                </div>

                <div className="home__data">
                    <div className="home__header">
                        <h1 className="home__title">On ear</h1>
                        <h2 className="home__subtitle">Beats 3</h2>
                    </div>

                    <div className="home__footer">
                        <h3 className="home__title-description">Overview</h3>
                        <p className="home__description">
                            Enjoy award-winning Beats sound with wireless
                            listening freedom and a sleek, streamlined design
                            with comfortable padded earphones, delivering
                            first-rate playback.
                        </p>
                        <button type="button" className="button button--flex">
                            <span className="button--flex">
                                <i className="ri-shopping-bag-line" /> Add to
                                Bag
                            </span>
                            <span className="home__price">$299</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionHome;
