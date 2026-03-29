import { useState, useEffect } from "react";
import data from "../utility/data";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(data);
      setLoading(false);
    }, 1000);
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
  );
  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }
  return (
    <section className="features-section">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="section-title">Latest at eGov</h2>
        </div>

        {/* Filters */}
        <div className="d-flex gap-3 mb-4 justify-content-center">
          <input
            className="form-control w-25"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="form-select w-25"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Health</option>
            <option>Finance</option>
            <option>Water</option>
          </select>
        </div>

        {/* No Results */}
        {filtered.length === 0 ? (
          <p className="text-center">No results found</p>
        ) : (
          <div className="row g-4">
            {filtered.map((p) => (
              <div key={p.id} className="col-md-4">
                <div className="feature-card">
                  {/* Image */}
                  <img
                    src={p.image || "https://picsum.photos/500/300"}
                    className="img-fluid"
                    alt={p.name}
                  />

                  {/* Overlay */}
                  <div className="feature-overlay">
                    <h4>{p.name}</h4>
                    <p>${p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
