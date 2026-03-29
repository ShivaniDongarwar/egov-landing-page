import React from "react";

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="hero-title">
              20 years of digital transformation in public service delivery
              <span>It's possible.</span>
            </h1>
            <p className="hero-text mt-3">
              Enabling governments to deliver transparent and efficient
              services.
            </p>
            <div className="mt-4">
              <button className="btn btn-primary me-2">Our Approach</button>
              <button className="btn btn-outline-primary">Our Impact</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src="https://picsum.photos/600/400" className="img-fluid" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
