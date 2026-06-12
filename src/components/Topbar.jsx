import { Search, Bell, Languages, ChevronDown } from "lucide-react";

function Topbar() {
  return (
    <div className="topbar">
      <h1 className="page-title">Dashboard</h1>

      <div className="search-box">
        <Search size={16} className="search-icon" />
        <input type="text" placeholder="Search here..." />
      </div>

      <div className="topbar-right">
        <button className="language-btn">
          <span className="flag">🇺🇸</span>
          <span>Eng (US)</span>
          <ChevronDown size={14} />
        </button>

        <button className="notification-btn">
          <Bell size={18} />
          <span className="notification-dot"></span>
        </button>

        <div className="avatar">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />
          <div>
            <div className="avatar-name">Tannu</div>
            <div className="avatar-role">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar
