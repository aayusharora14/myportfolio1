"use client";
import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/swiper.min.css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";

// Move the handleDownload function outside the component body
const handleDownload = (pdfLink) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfLink;
    link.target = '_blank'; // Open the link in a new tab
    link.download = 'certificate.pdf'; // Specify the default file name for the downloaded PDF
    document.body.appendChild(link);

    // Trigger a click on the link to initiate the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
};

const Residencies = () => {
    return (
        <section id="certification">
            <div id="residencies" className="r-wrapper">
                <div className="paddings innerWidth r-container">
                    <div className="flexColStart r-head">
                        <span className="primaryTexta">Certifications</span>
                        <span className="orangeText">Badges echoing the tale of Knowledge & Experience gained.</span>
                    </div>
                    <Swiper {...sliderSettings}>
                        <SlideNextButton />
                        {/* slider */}
                        {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div onClick={() => handleDownload(card.link)} className="card-link">
                                    <div className="flexColStart r-card">
                                        <img src={card.image} alt="home" />
                                        <span className="secondaryText r-price">
                                            <span style={{ color: "orange" }}>Issuer: </span>
                                            <span className="price">{card.price}</span>
                                        </span>
                                        <span className="primaryTextb">{card.name}</span>
                                        <span className="secondaryText">{card.detail}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()} className="r-prevButton">
                &lt;
            </button>
            <button onClick={() => swiper.slideNext()} className="r-nextButton">
                &gt;
            </button>
        </div>
    );
};

export default Residencies;
