import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <React.Fragment>
      {/* <Seo page="Home"> */}
      <Navbar />

      <div className="header">
        <div className="hero-section">
          <div className="hero-text">
            <h1> Interior Archictectural Firm </h1>
            <p>
              Darkosky Company is devoted to meticulously crafting residential,
              commercial, institutional, and transportation spaces that
              seamlessly blend functionality with aesthetic appeal. Our mission
              is to actualize our clients' visions, creating environments that
              not only align with their unique preferences out also resonate
              with a global audience.
            </p>
            <button className="hero-but">Get Started</button>
           <a href="https://www.instagram.com/_darkoskydesign_?igsh=ZmFoaGhiZzgyYjh1"> <button className="hero-but1">Watch Video</button> </a> <br /> <br />
            <div className="effect">
              <div>
                <h3>20+</h3>
                <h6>
                  Furniture & <br /> equipment
                </h6>
              </div>
              <div>
                <h3>12+</h3>
                <h6>
                  Fresh interior <br /> decor
                </h6>
              </div>
              <div>
                <h3>12+</h3>
                <h6>Happy Clients</h6>
              </div>
            </div>
          </div>

          <div>
            <img src="./assets/Rectangle 1.svg" alt="hero" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="create-section">
          <h1>
            We Will Provide
            <br /> Interior Decoration{" "}
          </h1>

          <p>We Help you to experience Luxuries Feel</p>

          <div className="before-after-section">
            <div className="before-section">
              <div>
                <h3>1</h3>
                <h5>Consultation</h5>
                <p>Determine the style and materials of the interior</p>
              </div>

              <div>
                <h3>2</h3>
                <h5>Ideation</h5>
                <p>Determine the style and materials of the interior</p>
              </div>

              <div>
                <h3>3</h3>
                <h5>Product Selection</h5>
                <p>Determine the style and materials of the interior</p>
              </div>

              <div>
                <h3>4</h3>
                <h5>Processing</h5>
                <p>Determine the style and materials of the interior</p>
              </div>
            </div>
            <div className="after-section">
              <img src="./assets/gf.svg" className="pood" alt="we" />
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="tab-section">
            <div className="">
              <img src="./assets/interior.svg" className="pood" alt="we" />
            </div>

            <div className="context-section">
              <h3>
                If you are looking for Interior design help, then we are ready
                to help you the most
              </h3>

              <p>
                Our team of award-winning interior designers is here to help you
                build the minimalist and clean environment of your dreams.
              </p>
           <a href="https://www.instagram.com/_darkoskydesign_?igsh=ZmFoaGhiZzgyYjh1">   <button> Learn More</button> </a>
            </div>
          </div>
        </div>

        <h1 className=" testimonial-header" href="pricing">
          Products & Service We Offer
        </h1>

        <div className="testimonial-section">
          <div className="testimonial-card">
            <img src="./assets/decor1.svg" className="pood" alt="we" />

            <div className="user">
              {" "}
              <h5>Home decor</h5>   <a href="https://www.instagram.com/_darkoskydesign_?igsh=ZmFoaGhiZzgyYjh1">  <button> Learn more</button></a>
            </div>
          </div>

          <div className="testimonial-card">
            <img src="./assets/decor2.svg" className="pood" alt="we" />

            <div className="user">
              {" "}
              <h5>Kitchen decor</h5>   <a href="https://www.instagram.com/_darkoskydesign_?igsh=ZmFoaGhiZzgyYjh1">  <button> Learn more</button> </a>
            </div>
          </div>
          <div className="testimonial-card">
            <img src="./assets/decor3.svg" className="pood" alt="we" />

            <div className="user">
              {" "}
              <h5>Office decor</h5 >   <a href="https://www.instagram.com/_darkoskydesign_?igsh=ZmFoaGhiZzgyYjh1">  <button> Learn more</button></a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="l-section">
          <h1> We Build more Projects Successfully</h1>

       <a href="https://www.instagram.com/_darkoskydesign_?igsh=ZmFoaGhiZzgyYjh1">   <button className="last-but">See Gallery</button></a>

          <div className="last-section">
            <div className="testimonial-card">
              <img src="./assets/Rectangle 8.svg" className="pood" alt="we" />
            </div>

            <div className="testimonial-card">
              <img src="./assets/Rectangle 9.svg" className="pood" alt="we" />
            </div>
            <div className="testimonial-card">
              <img src="./assets/Rectangle 10.svg" className="pood" alt="we" />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <Footer />

      {/* </Seo> */}
    </React.Fragment>
  );
}

export default Home;
