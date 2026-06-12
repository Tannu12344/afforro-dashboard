import {
  DollarSign,
  ShoppingBag,
  Users,
  Package,
} from "lucide-react";

const stats = [
  {
    title: "$1k",
    label: "Total Sales",
    change: "+8% from yesterday",
    icon: DollarSign,
    bg: "#FFE2E5",
    iconBg: "#FA5A7D",
  },
  {
    title: "300",
    label: "Total Order",
    change: "+5% from yesterday",
    icon: ShoppingBag,
    bg: "#FFF4DE",
    iconBg: "#FF947A",
  },
  {
    title: "5",
    label: "Product Sold",
    change: "+1.2% from yesterday",
    icon: Package,
    bg: "#DCFCE7",
    iconBg: "#3CD856",
  },
  {
    title: "8",
    label: "New Customers",
    change: "+0.5% from yesterday",
    icon: Users,
    bg: "#F3E8FF",
    iconBg: "#BF83FF",
  },
];

function StatsGrid() {
  return (
    <div className="dashboard-card sales-summary-card">
      <div className="sales-header">
        <div>
          <h3>Today's Sales</h3>
          <p>Sales Summary</p>
        </div>

        <button className="export-btn">
          Export
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="mini-stat-card"
              style={{ background: item.bg }}
            >
              <div
                className="mini-stat-icon"
                style={{ background: item.iconBg }}
              >
                <Icon size={14} color="#fff" />
              </div>

              <h4>{item.title}</h4>

              <span className="mini-label">
                {item.label}
              </span>

              <p>{item.change}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatsGrid;