import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

import StatsGrid from './components/StatsGrid'
import VisitorInsights from './components/VisitorInsights'

import RevenueChart from './components/RevenueChart'
import CustomerSatisfaction from './components/CustomerSatisfaction'
import TargetReality from './components/TargetReality'

import TopProducts from './components/TopProducts'
import SalesMapping from './components/SalesMapping'
import VolumeServiceLevel from './components/VolumeServiceLevel'

import CustomersTable from './components/CustomersTable'

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        {/* =====================================
            Row 1
            Today's Sales + Visitor Insights
        ===================================== */}
        <div className="top-grid">
          <StatsGrid />
          <VisitorInsights />
        </div>

        {/* =====================================
            Row 2
            Revenue + Customer + Target
        ===================================== */}
        <div className="content-grid">
          <RevenueChart />
          <CustomerSatisfaction />
          <TargetReality />
        </div>

        {/* =====================================
            Row 3
            Products + Map + Volume
        ===================================== */}
        <div className="bottom-grid">
          <TopProducts />
          <SalesMapping />
          <VolumeServiceLevel />
        </div>

        {/* =====================================
            Row 4
            Customers API Table
        ===================================== */}
        <div className="table-section">
          <CustomersTable />
        </div>
      </main>
    </div>
  )
}

export default App