import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="card text-center">
      <div className="card-header">One Platform For All Your Need.</div>
      <div className="card-body">
        <div className="my-2">

        <Link to="/">Home</Link>
        </div>
        <div className="my-2">

        <Link to="/about">
          About
        </Link>
        </div>
        <div className="my-2">

        <Link to="/service">
          Services
        </Link>
        </div>
        <div className="my-2">

        <Link to="/contact">
          Contact Us
        </Link>
        </div>
      </div>
      <div className="card-footer text-muted">All right reserved @2024</div>
    </div>
  );
}
