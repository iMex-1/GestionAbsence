# React Redux Stagiaires App

A React application for managing trainees (stagiaires) and their absences, built with Redux Toolkit for state management.

## Features

- **Stagiaires Management**: View and manage trainee information
- **Absence Tracking**: Record and track absences with automatic discipline note updates
- **Group Filtering**: Filter trainees and absences by group
- **Discipline Notes**: Automatic decrement of discipline notes when absences are recorded
- **Responsive UI**: Built with Bootstrap for a clean, responsive interface

## Tech Stack

- **React** - UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation and routing
- **Bootstrap** - Styling and responsive design
- **Vite** - Build tool and dev server

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation bar
│   ├── Home.jsx         # Home page
│   ├── Stagiaires.jsx   # Trainees list and management
│   └── Absences.jsx     # Absences list
├── store.js             # Redux store and slices
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Redux Store

The application uses two Redux slices:

### stagiaireSlice
- Manages trainee data
- Handles group filtering
- Updates discipline notes

### absenceSlice
- Manages absence records
- Handles group filtering for absences
- Adds new absence entries

## Code Quality Analysis

This project is configured for code quality analysis with SonarQube. For detailed setup instructions, see [SONARQUBE_SETUP.md](./SONARQUBE_SETUP.md).

### Quick SonarQube Scan

If SonarQube is already set up:

```bash
npx sonar-scanner
```

View results at: `http://localhost:9000/dashboard?id=GestionAbs`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npx sonar-scanner` - Run SonarQube analysis

## License

MIT
