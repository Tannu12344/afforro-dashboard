import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", loyal: 340, new: 260, unique: 300 },
  { month: "Feb", loyal: 320, new: 240, unique: 360 },
  { month: "Mar", loyal: 260, new: 180, unique: 350 },
  { month: "Apr", loyal: 200, new: 140, unique: 290 },
  { month: "May", loyal: 190, new: 150, unique: 230 },
  { month: "Jun", loyal: 240, new: 280, unique: 220 },
  { month: "Jul", loyal: 290, new: 360, unique: 260 },
  { month: "Aug", loyal: 320, new: 370, unique: 300 },
  { month: "Sept", loyal: 310, new: 340, unique: 320 },
  { month: "Oct", loyal: 260, new: 280, unique: 300 },
  { month: "Nov", loyal: 190, new: 200, unique: 240 },
  { month: "Dec", loyal: 140, new: 130, unique: 200 },
];

function VisitorInsights() {
  return (
    <div className="dashboard-card visitor-card">
      <h3 className="visitor-title">
        Visitor Insights
      </h3>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid
            vertical={false}
            stroke="#EEF0F7"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#A3AED0",
              fontSize: 11,
            }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#A3AED0",
              fontSize: 11,
            }}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="loyal"
            name="Loyal Customers"
            stroke="#9C27FF"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="new"
            name="New Customers"
            stroke="#FF4D4F"
            strokeWidth={3}
            dot={{ r: 5 }}
          />

          <Line
            type="monotone"
            dataKey="unique"
            name="Unique Customers"
            stroke="#2ECC71"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default VisitorInsights;