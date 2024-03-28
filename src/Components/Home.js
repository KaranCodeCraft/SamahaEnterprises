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
      <section className="container-fluid py-4">
      <div className="container grid items-center justify-center gap-4 px-4 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-600px text-gray-500 md:text-xl xl:text-base dark:text-gray-400">
            Let us take care of the details. Focus on what you do best.
          </p>
        </div>
        <div className="row row-cols-1 gap-4 md:row-cols-3 md:gap-8">
          <div className="col flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 shadow-sm dark:border-gray-800">
            <div className="w-12 h-12 rounded-lg overflow-hidden aspect-square">
              <img
                alt="Icon"
                className="rounded-lg object-cover object-center"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold tracking-wide">Service One</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                This is a description of the first service offered.
              </p>
            </div>
          </div>
          <div className="col flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 shadow-sm dark:border-gray-800">
            <div className="w-12 h-12 rounded-lg overflow-hidden aspect-square">
              <img
                alt="Icon"
                className="rounded-lg object-cover object-center"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold tracking-wide">Service Two</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                This is a description of the second service offered.
              </p>
            </div>
          </div>
          <div className="col flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 shadow-sm dark:border-gray-800">
            <div className="w-12 h-12 rounded-lg overflow-hidden aspect-square">
              <img
                alt="Icon"
                className="rounded-lg object-cover object-center"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold tracking-wide">Service Three</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                This is a description of the third service offered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
