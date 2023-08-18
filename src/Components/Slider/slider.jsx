import React, { useCallback, useEffect, useState } from "react";
import "./slider.css";

const data = [
  {
    src: "./Images/Banner/baneer10.jpg",
    alt: "Image 1 for carousel",
    desc: "MOU signed by Maj. Gen. L.K. Gupta, Chairman INTACH with H.E. Dr. Sum Map, Dir. Gen. APSARA (national authority for the protection and management of Angkor &amp; the region of Seim Reap), Govt.of Comodia on 22nd June 2016 at Siem Reap, Cambodia for the period of three years ",
  },
  {
    src: "./Images/Banner/baneer7.jpg",
    alt: "Image 2 for carousel",
    desc: "Manimahesh Lake with Kailash Peak in the Background [Himachal Pradesh]",
  },
  {
    src: "./Images/Banner/baners3.jpg",
    alt: "Image 3 for carousel",
    desc: "Sampurnanand Sanskrit University, Varanasi",
  },
  {
    src: "./Images/Banner/baneer15.jpg",
    alt: "Image 4 for carousel",
    desc: "Traditional weaving, Assam, ICH Documentation",
  },
  {
    src: "./Images/Banner/baners2.jpg",
    alt: "Image 4 for carousel",
    desc: "Pani Kotha, Diu",
  },
  {
    src: "./Images/Banner/baneer9.jpg",
    alt: "Image 5 for carousel",
    desc: "Tillage of land using bullocks - a traditional farming practice [ Rani Bagh, Rajnagar, Khajuraho(M.P)]",
  },
];

const Slider = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }, [slide]);

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change slide every 1 second
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [nextSlide]);

  return (
    <>
      <div className="carousel">
        <div className="carousel-container">
          {data.map((item, idx) => {
            return (
              <>
              
               <img
                  src={item.src}
                  key={idx}
                  className={slide === idx ? "slide" : "slide-hidden"}
                  alt={item.alt}
                />
                <div className="description">
                  <span className={slide === idx ? "desc" : "desc-hidden"}>
                    {item.desc}
                  </span>
                </div>
               
              </>
            );
          })}

          <span className="indicators">
            {data.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </span>
          <img
            src="./Images/left-arrow.png"
            alt="arrow-icon"
            onClick={prevSlide}
            className="arrow arrow-left"
          />

          <img
            src="./Images/right-arrow.png"
            alt="arrow-icon"
            onClick={nextSlide}
            className="arrow arrow-right"
          ></img>
        </div>
      </div>
    </>
  );
};
export default Slider;
