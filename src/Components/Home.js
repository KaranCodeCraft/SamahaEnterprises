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
      <div className="jumbotron m-2">
        <div className="mx-4">
        <div className="mx-4">

        <h1 className="display-4">
          Welcome to <b>advertise24</b>
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
        </div>
      </div>
{/* service section starts */}

      <div className="container my-4">
        <h1 className="text-center display-4"><b>Our Services</b></h1>
        <p className="text-center display-4">Building dreams, one brick at a time.</p>
        <div className="my-4">
          <div className="d-flex justify-content-center">
            <div className="card mx-4" style={{ width: "20rem" }}>
              <img className="card-img-top" src={img1} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Innovative Architectural
                </h5>
              </div>
            </div>
            <div className="card mx-4" style={{ width: "20rem" }}>
              <img className="card-img-top" src={img2} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Streamlined Construction
                </h5>
              </div>
            </div>
            <div className="card mx-4" style={{ width: "20rem" }}>
              <img className="card-img-top" src={img3} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Transformative Renovation
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <span className="bg-light rounded px-3 py-1 text-sm border border-dark">
          Testimonials
        </span>
        <h1 className="m-4">Customers Love Our Platform</h1>
        <p className="m-4">
          Don't take our word for it. Here's what our customers have to say
          about their experience with our platform.
        </p>

  <div className="row text-center m-4">
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          className="rounded-circle shadow-1-strong" width="150" height="150" alt="customer"/>
      </div>
      <h5 className="mb-3">Maria Smantha</h5>
      <h6 className="text-primary mb-3">Web Developer</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Exceptional service, prompt response, high-quality product. Highly recommend.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
          className="rounded-circle shadow-1-strong" width="150" height="150" alt="customer"/>
      </div>
      <h5 className="mb-3">Lisa Cudrow</h5>
      <h6 className="text-primary mb-3">Graphic Designer</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Average experience, minor issues with product and service responsiveness.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div className="col-md-4 mb-0">
      <div className="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
          className="rounded-circle shadow-1-strong" width="150" height="150" alt="customer"/>
      </div>
      <h5 className="mb-3">John Smith</h5>
      <h6 className="text-primary mb-3">Marketing Specialist</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Exceptional service, prompt response, high-quality product. Highly recommend.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
  </div>

      </div>
    </div>
  );
}
