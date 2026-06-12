import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", last: 120, current: 280 },
  { month: "Feb", last: 150, current: 240 },
  { month: "Mar", last: 200, current: 260 },
  { month: "Apr", last: 80, current: 210 },
  { month: "May", last: 80, current: 270 },
  { month: "Jun", last: 110, current: 190 },
  { month: "Jul", last: 190, current: 320 },
];

function CustomerSatisfaction() {
  return (
    <div className="dashboard-card customer-card">
      <h3>Customer Satisfaction</h3>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="last"
            stroke="#1E9BFF"
            fill="#1E9BFF20"
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="current"
            stroke="#15D28E"
            fill="#15D28E20"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="customer-footer">
        <div>
          <span className="blue-dot"></span>
          Last Month
          <h4>$3,004</h4>
        </div>

        <div>
          <span className="green-dot"></span>
          This Month
          <h4>$4,504</h4>
        </div>
      </div>
    </div>
  );
}

export default CustomerSatisfaction;