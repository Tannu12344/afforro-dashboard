function SalesMapping() {
  return (
    <div className="dashboard-card sales-map-card">
      <h3>Sales Mapping by Country</h3>

      <div className="sales-map-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="world-map"
        />

        <div className="country us"></div>
        <div className="country brazil"></div>
        <div className="country india"></div>
        <div className="country africa"></div>
        <div className="country indonesia"></div>
      </div>
    </div>
  )
}

export default SalesMapping