# Aforro Sales Dashboard

## Project Overview

This project is a React-based Sales Dashboard built according to the provided Figma design. The dashboard presents sales analytics, customer insights, product performance, geographical sales distribution, and customer data fetched from an external API.

---

## Tech Stack

* React.js
* CSS3
* Recharts
* Axios
* JSONPlaceholder API

---

## Features Implemented

### UI Implementation

* Responsive dashboard layout
* Sidebar navigation
* Top navigation bar
* Today's Sales summary cards
* Visitor Insights card
* Revenue analytics chart
* Customer Satisfaction chart
* Target vs Reality chart
* Top Products table
* Sales Mapping by Country
* Volume vs Service Level chart

### API Integration

* Fetched customer data from:
  https://jsonplaceholder.typicode.com/users

### Data Table Features

* Search customers by name or email
* Filter customers by city
* Sort customers alphabetically by name
* Loading state
* Error handling
* Empty state handling

---

## Project Setup

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Navigate to Project

```bash
cd aforro-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Build Project

```bash
npm run build
```

---

## Assumptions & Decisions

* Recharts was used for data visualization.
* JSONPlaceholder API was used as a mock customer data source.
* Dashboard styling was implemented using plain CSS.
* Layout and visual appearance were designed to closely match the provided Figma design.
* Customer table functionality was implemented using React hooks and client-side filtering/sorting.
* World map markers were simulated using positioned elements over a map image.

---

## Folder Structure

```text
src
├── components
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│   ├── StatsGrid.jsx
│   ├── RevenueChart.jsx
│   ├── VisitorInsights.jsx
│   ├── CustomerSatisfaction.jsx
│   ├── TargetReality.jsx
│   ├── TopProducts.jsx
│   ├── SalesMapping.jsx
│   ├── VolumeServiceLevel.jsx
│   └── CustomersTable.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```
