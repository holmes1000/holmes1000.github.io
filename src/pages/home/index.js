import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/images/Profile Pic.jpg";
import Resume from "../../files/Samara Holmes - Resume V7.pdf";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: "url('https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/293204686_632085614968417_6512487650977848669_n.jpg?stp=dst-jpg_e15_fr_p1080x1080&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=1GQe1cEwTmMAX9EtOAs&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4MTgyNjA0ODk1MTE1NTY3Nw%3D%3D.2-ccb7-5&oh=00_AT_mnwM306owtQ7NpiL8lYd1NNt7Au_tpo29W7nAIgx79A&oe=63537A4A&_nc_sid=30a2ef')" }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/resume">
                    <div id="button_p" className="ac_btn btn" type="submit" onClick={() => window.open(Resume)}>
                      My Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
