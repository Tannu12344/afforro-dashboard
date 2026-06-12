import {
  LayoutGrid,
  ShoppingCart,
  BarChart3,
  Package,
  MessageSquare,
  Settings,
  LogOut,
  Trophy,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Leaderboard", icon: Trophy },
  { label: "Order", icon: ShoppingCart },
  { label: "Products", icon: Package },
  { label: "Sales Report", icon: BarChart3 },
  { label: "Messages", icon: MessageSquare },
  { label: "Settings", icon: Settings },
  { label: "Sign Out", icon: LogOut },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">A</div>
        <span>Aforro</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            className={`nav-item ${active ? "active" : ""}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="promo-card">
          <div className="promo-icon">💎</div>

          <h4>Aforro Pro</h4>

          <p>
            Get access to all
            <br />
            features on tetumbas
          </p>

          <button>Get Pro</button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;