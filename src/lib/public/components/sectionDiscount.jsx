import React from "react";
import confirm from "../../../config.json";

const SectionDiscount = () => {
    return (
        <section className="discount section">
            <div className="discount__container container grid">
                <div className="discount__animate">
                    <h2 className="discount__title">
                        Immerse yourself in <br /> your music
                    </h2>
                    <p className="discount__description">
                        Get it now, up to 50% off.
                    </p>
                    <button type="button" className="button button--flex">
                        <i className="ri-shopping-bag-line button__icon" /> Shop
                        Now
                    </button>
                </div>

                <img
                    src={confirm.assetsEndpoint + "assets/image/discount.png"}
                    alt=""
                    className="discount__img"
                />
            </div>
        </section>
    );
};

export default SectionDiscount;
