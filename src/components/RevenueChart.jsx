import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { day: "Monday", online: 14, offline: 13 },
  { day: "Tuesday", online: 17, offline: 12 },
  { day: "Wednesday", online: 6, offline: 22 },
  { day: "Thursday", online: 16, offline: 7 },
  { day: "Friday", online: 12, offline: 11 },
  { day: "Saturday", online: 17, offline: 14 },
  { day: "Sunday", online: 21, offline: 11 },
];

function RevenueChart() {
  return (
    <div className="dashboard-card revenue-card">
      <h3 className="revenue-heading">
        Total Revenue
      </h3>

      <div className="revenue-chart">
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: -20,
              bottom: 10,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#EEF0F7"
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#A3AED0",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              ticks={[0, 5, 10, 15, 20, 25]}
              tickFormatter={(v) => `${v}k`}
              tick={{
                fill: "#A3AED0",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Legend />

            <Bar
              dataKey="online"
              name="Online Sales"
              fill="#1E9BFF"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />

            <Bar
              dataKey="offline"
              name="Offline Sales"
              fill="#15D28E"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;