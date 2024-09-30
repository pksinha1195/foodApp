import React from "react";
import "../index";

function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#efefef" }}>
      <div className="mb-3 ">
        <div className="fs-2">FoodApp</div>
        <div className="btn-group dropup" style={{ float: "right" }}>
          <button
            type="button"
            className="btn btn-light dropup dropdown-toggle mx-4"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="../../india.png"
              alt="india"
              style={{ float: "left", marginTop: "5px", marginRight: "0.5em" }}
            />
            India
          </button>
          <ul className="dropdown-menu">
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                <img
                  src="./images/UAE.png"
                  alt="UAE"
                  height="20px"
                  width="20px"
                  style={{ marginBottom: "4px", marginRight: "4px" }}
                />{" "}
                UAE
              </a>
            </li>
          </ul>
          {/* </div>
        <div
          className="btn-group btn-color dropup mx-5"
          style={{ float: "right" }}
        > */}

          <button
            type="button"
            className="btn btn-light dropup dropdown-toggle mx-4 "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-globe pe-2"></i>
            English
          </button>
          <ul className="dropdown-menu">
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                English
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Türkçe
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                हिंदी
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Português (BR)
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Indonesian
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Português (PT)
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Español
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Čeština
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Slovenčina
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Polish
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Italian
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a className="dropdown-item" href="#">
                Vietnamese
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row footer-size mt-5 justify-self-center">
        <div className="col-lg-2 col-sm-6 overflow-hidden ">
          <h6>About FoodApp</h6>
          <p>Who We Are </p>
          <p>Blogs</p>
          <p>Work With Us</p>
          <p>Investor Relation</p>
          <p>Report Fraud</p>
          <p>Press Kit</p>
          <p>Contact Us</p>
        </div>
        <div className="col-lg-2 col-sm-6 overflow-hidden">
          <h6>ZOMAVERSE</h6>
          <p>Zomato</p>
          <p>Blinkit</p>
          <p>Feeding India</p>
          <p>Hyperpure</p>
          <p>Zomato Live</p>
          <p>Zomaland</p>
          <p>Weather Union</p>
        </div>
        <div className="col-lg-3 col-sm-6 overflow-hidden">
          <h6>FOR RESTAURANTS</h6>
          <p>Partner With Us</p>
          <p>Apps For You</p>
        </div>
        <div className="col-lg-2 col-sm-6 overflow-hidden">
          <h6>LEARN MORE</h6>
          <p>Privacy</p>
          <p>Security</p>
          <p>Terms</p>
          <p>Sitemap</p>
        </div>
        <div className="col-lg-3 col-sm-6 overflow-hidden">
          <h6>Social Links</h6>
          <p className="py-3 ">
            <span className="social">
              <i className="fa-brands fa-linkedin"></i>
            </span>
            <span className="social">
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span className="social">
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span className="social">
              <i className="fa-brands fa-youtube"></i>
            </span>
            <span className="social">
              <i className="fa-brands fa-instagram "></i>
            </span>
          </p>
          <p></p>
          <p>
            <img src="./apple-store.webp" alt="" height="50px" />
          </p>
          <p>
            <img src="./play-store.webp" alt="" height="50px" />
          </p>
        </div>
      </div>
      <div className="text-center pb-5" style={{ height: "80px" }}>
        <hr />
        All trademarks are properties of their respective owners. 2008-2024 ©
        FoodApp
        <hr />
      </div>
    </div>
  );
}

export default Footer;
