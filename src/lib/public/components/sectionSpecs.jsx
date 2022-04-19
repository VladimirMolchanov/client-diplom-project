import React from "react";
import confirm from "../../../config.json";

const SectionSpecs = () => {
    return (
        <section className="specs section grid" id="specs">
            <h2 className="section__title section__title-gradient">Specs</h2>

            <div className="specs__container container grid">
                <div className="specs__content grid">
                    <div className="specs__data">
                        <i className="ri-bluetooth-line specs__icon" />
                        <h3 className="specs__title">Connection</h3>
                        <span className="specs__subtitle">Bluetooth v5.2</span>
                    </div>
                    <div className="specs__data">
                        <i className="ri-battery-charge-line specs__icon" />
                        <h3 className="specs__title">Battery</h3>
                        <span className="specs__subtitle">Duration 40h</span>
                    </div>
                    <div className="specs__data">
                        <i className="ri-plug-line specs__icon" />
                        <h3 className="specs__title">Microphone</h3>
                        <span className="specs__subtitle">
                            Fast charge 4.2-AAC
                        </span>
                    </div>
                    <div className="specs__data">
                        <i className="ri-mic-line specs__icon" />
                        <h3 className="specs__title">Connection</h3>
                        <span className="specs__subtitle">
                            Supports Apple Siri <br /> and Google
                        </span>
                    </div>
                </div>

                <div>
                    <img
                        src={confirm.assetsEndpoint + "assets/image/specs.png"}
                        className="specs__img"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionSpecs;
