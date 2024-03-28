import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/demoimg (1).png";
import img2 from "../assets/demoimg (2).png";
import img3 from "../assets/demoimg (3).png";

export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="jumbotron border border-primary">
        <h1 className="display-4">
          Welcome to <b>Savi Vision</b>
        </h1>
        <p className="lead">
          We are your trusted partner for all civil construction and
          infrastructure needs.
        </p>
        <hr className="my-4" />
        <p>
          With our expertise and dedication, we deliver high-quality solutions
          tailored to meet your project requirements.
        </p>
        <p className="lead">
          <Link className="btn btn-info" to="/about" role="button">
            About Us
          </Link>
        </p>
      </div>
      <div className="container border border-dark my-4">
        <h2 className="text-center">Our Services</h2>
        <p className="text-center">Building dreams, one brick at a time.</p>
        <div className="my-4">
          <div className="d-flex justify-content-center">
            <div className="card mx-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img1} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title text-center">Innovative Architectural</h5>
              </div>
            </div>
            <div className="card mx-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img2} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title text-center">Streamlined Construction</h5>
              </div>
            </div>
            <div className="card mx-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img3} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title text-center">Transformative Renovation</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
