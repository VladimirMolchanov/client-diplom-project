import React from "react";
import confirm from "../../../config.json";

const SectionSponsor = () => {
    return (
        <section className="sponsor section">
            <div className="sponsor__container container grid">
                <img
                    src={confirm.assetsEndpoint + "assets/image/sponsor1.png"}
                    alt=""
                    className="sponsor__img"
                />
                <img
                    src={confirm.assetsEndpoint + "assets/image/sponsor2.png"}
                    alt=""
                    className="sponsor__img"
                />
                <img
                    src={confirm.assetsEndpoint + "assets/image/sponsor3.png"}
                    alt=""
                    className="sponsor__img"
                />
                <img
                    src={confirm.assetsEndpoint + "assets/image/sponsor4.png"}
                    alt=""
                    className="sponsor__img"
                />
            </div>
        </section>
    );
};

export default SectionSponsor;
