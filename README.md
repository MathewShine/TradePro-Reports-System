# TradePro Reports Center

A modern, enterprise-grade reports generation interface for trading and portfolio management platforms. Built with React, Vite, and Tailwind CSS.

##  Project Overview

TradePro Reports Center is a comprehensive reporting dashboard designed for financial advisors and portfolio managers. It enables generation of detailed performance, tax, holdings, and custom reports with an intuitive parameter-based interface.

## Features

- **Multi-Report Types**: Performance (Monthly/Quarterly/Annual), Statements, Holdings, Tax, Risk, and Custom Reports
- **Interactive Parameters Panel**: Dynamic client selection, date ranges, benchmarks, and format options (PDF/Excel)
- **Real-time Performance Visualization**: SVG-based chart showing portfolio performance metrics
- **Collapsible Navigation**: Clean sidebar with expandable report categories
- **Dark Mode Support**: Full dark theme implementation with Tailwind CSS
- **Responsive Design**: Mobile-first approach with grid-based layout
- **Enterprise UI/UX**: Professional color scheme with primary brand color (#0095ff)

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Manrope Font** - Modern, professional typography
- **Material Symbols** - Icon system

##  Installation
```bash
# Clone or create the project
npm create vite@latest TradePro-reports -- --template react

# Navigate to project directory
cd TradePro-reports

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npm install @tailwindcss/forms

# Initialize Tailwind
npx tailwindcss init -p
```

## Running the Project
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

##  Project Structure
```
TradePro-reports/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx         # Left panel with report categories
│   │   ├── ReportCenter.jsx    # Main content area with chart & data
│   │   └── ReportParameters.jsx # Right panel with form controls
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles & Tailwind imports
│   └── main.jsx                # Entry point
├── tailwind.config.js          # Tailwind configuration
└── README.md
```

## Design System

### Colors
- **Primary**: #0095ff (Blue)
- **Background Light**: #f5f7f8
- **Background Dark**: #0f1b23
- **Text Primary**: #101518
- **Text Secondary**: #5e798d

### Typography
- **Font Family**: Manrope (400, 500, 600, 700, 800 weights)
- **Heading**: 4xl, font-black for main title
- **Body**: sm-base range with normal-medium weights

### Components
- Rounded corners: 0.5rem default, 1rem for cards
- Borders: Subtle gray (#dae1e7) with dark mode variants
- Hover states: Primary color highlights on interactive elements

## Customization

### Adding New Report Types
Edit `src/components/Sidebar.jsx` and add to the `sections` array:
```jsx
{ id: 'your-report', title: 'Your Report Type', items: ['Subcategory 1', 'Subcategory 2'] }
```

### Changing Primary Color
Update `tailwind.config.js`:
```js
colors: {
  "primary": "#YOUR_COLOR_HERE",
}
```

### Modifying Report Parameters
Edit `src/components/ReportParameters.jsx` to add/remove form fields.

## Key Components Breakdown

### Header
- Sticky navigation bar with TradePro logo
- Horizontal menu with active state highlighting
- Responsive spacing and backdrop blur effect

### Sidebar
- Collapsible accordion sections using `<details>` element
- Active state management for selected reports
- Smooth transitions with Tailwind's group utilities

### ReportCenter
- Performance metrics card with large typography
- SVG line chart with gradient fill
- Responsive data table with sortable headers
- Disclaimer text in footer

### ReportParameters
- Controlled form components with React state
- Toggle buttons for PDF/Excel format selection
- Checkbox group for report sections
- Primary action button for generation

##  Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

##  Notes

- No report history table included (as per requirements)
- Uses native HTML `<details>` for sidebar expansion
- All interactions are client-side with state management
- Ready for backend integration with API endpoints

##  Future Enhancements

- Connect to backend API for real report generation
- Add date range picker library for better UX
- Implement actual chart library (Chart.js/Recharts) for dynamic data
- Add export functionality for reports
- User authentication and role-based access

