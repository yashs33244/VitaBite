import Link from "next/link";
import { Fragment } from "react";
import munfirmSlider from "../munfirmSlider";
export const HomeSlider1 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item slide-one ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">Welcome to VitaBite</div>
                <h1>Discover Delectable Recipes &amp; Flavors</h1>
                <h6>Savor Every Bite with Our Easy-to-Follow Recipes</h6>
                <div className="slider-btns mt-30">
                  <Link href="/check-nutrients">
                    <a className="theme-btn style-two">
                      Cook Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-image1.png"
                  alt="Slider"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slide-shapes">
          <img
            className="pumpkin-shape"
            src="assets/images/slider/pumpkin.png"
            alt="Pumpkin"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="assets/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-one"
            src="assets/images/slider/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/slider/leaf-2.png"
            alt="Leaf"
          />
        </div>
      </div>
      <div
        className={`slider-single-item slide-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-image2.png"
                  alt="Slider"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">Indulge Your Taste Buds: </div>
                <h1>Recipes & Flavors Galore!</h1>
                <h6>Explore a World of Culinary Delights</h6>
                <div className="slider-btns mt-30">
                  <Link href="/check-nutrients">
                    <a className="theme-btn style-two">
                      Cook Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-shapes">
          <img
            className="pumpkin-shape"
            src="assets/images/slider/pumpkin.png"
            alt="Pumpkin"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="assets/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-one"
            src="assets/images/slider/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/slider/leaf-2.png"
            alt="Leaf"
          />
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
