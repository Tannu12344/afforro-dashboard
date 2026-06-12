import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
} from "recharts";

const data = [
  { month: "Jan", reality: 18, target: 24 },
  { month: "Feb", reality: 16, target: 22 },
  { month: "Mar", reality: 14, target: 27 },
  { month: "Apr", reality: 18, target: 22 },
  { month: "May", reality: 21, target: 30 },
  { month: "Jun", reality: 21, target: 30 },
  { month: "Jul", reality: 21, target: 30 },
];

function TargetReality() {
  return (
    <div className="dashboard-card target-card">
      <h3>Target vs Reality</h3>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
          />

          <Bar
            dataKey="reality"
            fill="#69D2A3"
            radius={[4, 4, 0, 0]}
          />

          <Bar
            dataKey="target"
            fill="#F8C400"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="target-footer">
        <div className="target-item">
          <div className="target-icon green">
            👜
          </div>

          <div>
            <span>Reality Sales</span>
            <small>Global</small>
          </div>

          <strong>8.823</strong>
        </div>

        <div className="target-item">
          <div className="target-icon yellow">
            🛍
          </div>

          <div>
            <span>Target Sales</span>
            <small>Commercial</small>
          </div>

          <strong className="yellow-text">
            12.122
          </strong>
        </div>
      </div>
    </div>
  );
}

export default TargetReality;