import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./intro.css";

const images = [
  require("../../assets/hero_image3.png"),
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg",
  "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GATEWAY/April/CML/CML-GW_HERO_pc_2x._CB561612246_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/GW_Storage-box_3000x1200_PC._CB561623684_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg",
];

function Intro() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="box" id="intro">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt="sample_file" src={URL} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Intro;
