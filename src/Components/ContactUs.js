import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="container inline-block">
        <form className="my-4 mx-2">
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
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Select Solution</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Event Management</option>
              <option>Civil Work</option>
              <option>Construction Work</option>
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
          <div className="container text-center">
          <button className="btn btn-success">Submit</button>
          </div>
        </form>
        <div className="container" >
          <div className="jumbotron">
            <h1 className="display-4">Connect to Us!!</h1>
            <p className="lead">
              We here at Samaha Enterpises working in Civil Work industry since 15 years. <br/>By connected with us you get the best solution ever
            </p>
            <hr className="my-4"/>
            <p>
              For Contact please email us at <u>suleman935544@gmail.com</u>  <br/> or connect us on mobile via <u>+91 93556 63345</u>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
