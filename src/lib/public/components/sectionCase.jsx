import React from "react";
import confirm from "../../../config.json";

const SectionCase = () => {
    return (
        <section className="case section grid" id="case">
            <h2 className="section__title section__title-gradient">Case</h2>
            <div className="case__container container grid">
                <div>
                    <img
                        src={confirm.assetsEndpoint + "assets/image/case.png"}
                        alt=""
                        className="case__img"
                    />
                </div>

                <div className="case__data">
                    <p className="case__description">
                        With a comfortable and adaptable case so that you can
                        store it whenever you want, and keep your durability
                        forever.
                    </p>
                    <button type="button" className="button button--flex">
                        <i className="ri-information-line button__icon" />
                        More info
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SectionCase;
