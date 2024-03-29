import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
{/* <!-- Footer --> */}
<div className="fot">
  <div className="mx-4"></div>
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Samanha Enterprises
          </h6>
          <p>
          We are your trusted partner for all civil construction and
          infrastructure needs.
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4 text-white">
            Navigate Here
          </h6>
          <p>
          <Link className="text-reset text-white" to="/">
                Home
              </Link>
          </p>
          <p>
          <Link className="text-reset text-white" to="/about">
                About
              </Link>
          </p>
          <p>
          <Link className="text-reset text-white" to="/service">
                Service
              </Link>
          </p>
          <p>
          <Link className="text-reset text-white" to="/contact">
                Contact
              </Link>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"> */}
          {/* <!-- Links --> */}
          {/* <h6 className="text-uppercase fw-bold mb-4 text-white">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div> */}
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New Delhi, India</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            suleman935544@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 935 566 3345</p>
          {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4 text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2024 Copyright: Samaha Enterprises.in
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
</div>
</>
  );
}
