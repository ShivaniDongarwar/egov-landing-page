function Features() {
  return (
    <section className="features-section">
    <div className="container">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="section-title">Our Products &amp; Solutions</h2>
        <p className="section-subtitle">
          Enabling governments with scalable digital platforms
        </p>
      </div>
      {/* Feature Cards */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="feature-card">
            <img src="https://picsum.photos/500/300" className="img-fluid" />
            <div className="feature-overlay">
              <h4>Public Health</h4>
              <p>Digital systems for healthcare delivery</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4">
          <div className="feature-card">
            <img src="https://picsum.photos/500/300" className="img-fluid" />
            <div className="feature-overlay">
              <h4>Public Finance</h4>
              <p>Smart financial governance solutions</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4">
          <div className="feature-card">
            <img src="https://picsum.photos/500/300" className="img-fluid" />
            <div className="feature-overlay">
              <h4>Water &amp; Sanitation</h4>
              <p>Improving access to clean water systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

export default Features