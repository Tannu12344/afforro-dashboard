import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
} from 'recharts'

const data = [
  { month: 'Jan', volume: 70, service: 42 },
  { month: 'Feb', volume: 85, service: 48 },
  { month: 'Mar', volume: 70, service: 20 },
  { month: 'Apr', volume: 62, service: 22 },
  { month: 'May', volume: 48, service: 20 },
  { month: 'Jun', volume: 52, service: 34 },
]

function VolumeServiceLevel() {
  return (
    <div className="dashboard-card volume-card">
      <h3>Volume vs Service Level</h3>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
          />

          <Bar
            dataKey="service"
            stackId="a"
            fill="#16D39A"
            radius={[0, 0, 0, 0]}
            barSize={18}
          />

          <Bar
            dataKey="volume"
            stackId="a"
            fill="#1E9BFF"
            radius={[4, 4, 0, 0]}
            barSize={18}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="volume-footer">
        <div className="volume-item">
          <div className="legend-row">
            <span className="legend-dot blue"></span>
            <span>Volume</span>
          </div>

          <strong>1,135</strong>
        </div>

        <div className="divider"></div>

        <div className="volume-item">
          <div className="legend-row">
            <span className="legend-dot green"></span>
            <span>Services</span>
          </div>

          <strong>635</strong>
        </div>
      </div>
    </div>
  )
}

export default VolumeServiceLevel