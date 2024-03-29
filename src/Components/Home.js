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
          Welcome to <b>Samaha Enterprises</b>
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

<section class="bsb-service-7 py-5 py-xl-8">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7">
            <h3 class="fs-5 mb-2 text-secondary text-center text-uppercase">Services</h3>
            <h2 class="display-5 mb-5 mb-xl-9 text-center">We offer premier services where excellence meets affordability.</h2>
          </div>
        </div>
      </div>
    
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="container-fluid bg-light border shadow">
              <div class="row">
                <div class="col-12 col-md-4 p-0">
                  <div class="card border-0 bg-transparent">
                    <div class="card-body text-center p-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-basket2-fill text-primary mb-4" viewBox="0 0 16 16">
                        <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                      </svg>
                      <h4 class="fw-bold text-uppercase mb-4">Strategy</h4>
                      <p class="mb-4 text-secondary">Elevate your brand with our comprehensive brand building expertise. From strategic planning to creative execution, we specialize in crafting iconic brands that captivate audiences and drive success. Explore our tailored solutions to stand out in today's competitive market.</p>
                      
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 p-0 border-top border-bottom border-start border-end">
                  <div class="card border-0 bg-transparent">
                    <div class="card-body text-center p-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-rocket text-primary mb-4" viewBox="0 0 16 16">
                        <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z" />
                        <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.495 3.495 0 0 0-.463-.315A2.19 2.19 0 0 0 8.25.064.546.546 0 0 0 8 0a.549.549 0 0 0-.266.073 2.312 2.312 0 0 0-.142.08 3.67 3.67 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635.85 0 1.7-.207 2.4-.635.067.03.132.056.196.083.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562l-1.499-1.83ZM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935L12 10.445ZM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199ZM8.009 1.073c.063.04.14.094.226.163.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13c-.781 0-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32.09-.076.17-.135.236-.18Z" />
                        <path d="M9.479 14.361c-.48.093-.98.139-1.479.139-.5 0-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0l1.079-1.439Z" />
                      </svg>
                      <h4 class="fw-bold text-uppercase mb-4">Design</h4>
                      <p class="mb-4 text-secondary">Innovate and excel in your industry with our superior product development services. We blend innovation, quality, and customer-centric approaches to bring your product ideas to life. Trust us from concept design to market launch to elevate your product line and exceed expectations.</p>
                      
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 p-0">
                  <div class="card border-0 bg-transparent">
                    <div class="card-body text-center p-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-incognito text-primary mb-4" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                      <h4 class="fw-bold text-uppercase mb-4">Development</h4>
                      <p class="mb-4 text-secondary">Craft a winning strategy for your business with our expertise in strategy design and development. From conceptualization to implementation, we provide strategic solutions tailored precisely to your goals and challenges. Partner with us to unlock new opportunities and achieve sustainable growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>

    
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
      <h6 className="text-primary mb-3">Project Manager</h6>
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
      <h6 className="text-primary mb-3">Sr. Supervisor</h6>
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
      <h6 className="text-primary mb-3">Managing Director</h6>
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
