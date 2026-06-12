const products = [
  {
    id: "01",
    name: "Home Decor Range",
    popularity: 45,
    color: "#1E9BFF",
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: 29,
    color: "#15D28E",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    popularity: 18,
    color: "#8B5CF6",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    popularity: 25,
    color: "#FF8A00",
  },
]

function TopProducts() {
  return (
    <div className="dashboard-card top-products-card">
      <h3>Top Products</h3>

      <table className="products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Sales</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>

              <td>{product.name}</td>

              <td>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${product.popularity}%`,
                      background: product.color,
                    }}
                  />
                </div>
              </td>

              <td>
                <span
                  className="sales-badge"
                  style={{
                    borderColor: product.color,
                    color: product.color,
                  }}
                >
                  {product.popularity}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TopProducts