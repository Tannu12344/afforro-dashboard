# Aforro Sales Dashboard

A React + Vite implementation of a sales dashboard UI, with a customers data table powered by the JSONPlaceholder API.

## Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app runs at `http://localhost:5173` by default.

## Tech Stack

- React 18 (functional components + hooks)
- Vite
- Axios for API requests
- lucide-react for icons
- Plain CSS with custom design tokens (CSS variables)

## Features Implemented

### Part 1 — Dashboard UI
- Sidebar navigation with sections (Menu / General) and an "Upgrade to Pro" card
- Top bar with search, notification/mail icons, and user profile
- Stats cards row (Revenue, Orders, New Customers, Conversion Rate) with up/down trend indicators
- Revenue overview panel with a stacked bar chart (Online vs In-Store sales) and legend
- Sales by Category panel with a CSS-based donut chart and legend
- Fully responsive layout (sidebar collapses, grids stack on smaller screens)

### Part 2 — API Integration & Data Table
- Fetches user data from `https://jsonplaceholder.typicode.com/users` using Axios
- Displays Name, Email, Company Name, and City in a table
- **Search**: filters by name or email (case-insensitive, live)
- **Sort**: click the "Name" column header to toggle ascending/descending order
- **Filter**: dropdown to filter rows by city (populated dynamically from the fetched data)
- **Loading state**: shows a "Loading customers..." message while the request is in flight
- **Error state**: shows a friendly error message if the request fails
- **Empty state**: shows a message when no rows match the current search/filter

## Assumptions & Decisions

- The exact Figma file required login/access that wasn't available during development, so the dashboard layout (sidebar, stat cards, charts, table) was built to closely match the general structure and visual hierarchy of a typical sales dashboard (as described in the assignment), rather than pixel-matching specific values from the design file.
- Chart data (revenue bars, category donut, stat card numbers) is static/mock data, since no analytics API was specified.
- Sorting is implemented only for the Name column (as required); other columns remain in their fetched order.
- Search matches against both `name` and `email` fields simultaneously.
- City filter options are derived dynamically from the actual API response rather than hardcoded.
- Styling uses plain CSS with CSS custom properties (design tokens) instead of a UI framework, to keep the bundle lightweight and styles easy to customize.
