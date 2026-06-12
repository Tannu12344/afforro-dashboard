import { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

function CustomersTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [search, setSearch] = useState('')
  const [cityFilter, setCityFilter] = useState('All')
  const [sortOrder, setSortOrder] = useState(null) // 'asc' | 'desc' | null

  useEffect(() => {
    let cancelled = false

    async function fetchUsers() {
      setLoading(true)
      setError(null)
      try {
        const res = await axios.get(API_URL)
        if (!cancelled) setUsers(res.data)
      } catch (err) {
        if (!cancelled) setError('Failed to load customers. Please try again later.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUsers()
    return () => {
      cancelled = true
    }
  }, [])

  const cities = useMemo(() => {
    const unique = Array.from(new Set(users.map((u) => u.address?.city))).filter(Boolean)
    return ['All', ...unique.sort()]
  }, [users])

  const filteredUsers = useMemo(() => {
    let result = [...users]

    if (search.trim()) {
      const q = search.trim().toLowerCase()
      result = result.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
      )
    }

    if (cityFilter !== 'All') {
      result = result.filter((u) => u.address?.city === cityFilter)
    }

    if (sortOrder) {
      result.sort((a, b) =>
        sortOrder === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      )
    }

    return result
  }, [users, search, cityFilter, sortOrder])

  function toggleSort() {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <div className="dashboard-card table-panel">
      <div className="panel-header">
        <div>
          <h3>Customers</h3>
          <div className="subtitle">Data from JSONPlaceholder API</div>
        </div>
      </div>

      <div className="table-controls">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city === 'All' ? 'All Cities' : city}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="table-state">Loading customers...</div>}

      {!loading && error && <div className="table-state error">{error}</div>}

      {!loading && !error && (
        <>
          {filteredUsers.length === 0 ? (
            <div className="table-state">No customers match your filters.</div>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th onClick={toggleSort}>
                    Name
                    <span className="sort-arrow">
                      {sortOrder === 'asc' ? '▲' : sortOrder === 'desc' ? '▼' : '⇕'}
                    </span>
                  </th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.company?.name}</td>
                    <td>{user.address?.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  )
}

export default CustomersTable
