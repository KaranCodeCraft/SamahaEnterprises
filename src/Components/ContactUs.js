import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="container d-flex">
        <div className="container my-4" >
          <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
          </div>
        </div>
        <form className="my-4" style={{minWidth: "30%"}}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Audio Solution</option>
              <option>Video Solution</option>
              <option>CCTV Solution</option>
              <option>Automation Solution</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Brief here</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}
