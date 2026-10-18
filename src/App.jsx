
import { Link, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import EmployeeForm from './EmployeeForm';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <Link className="navbar-brand fw-bold" to="/">
          Employee Portal
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          <Link className="nav-link text-white" to="/employee-form">
            Employee Form
          </Link>
        </div>
      </nav>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/employee-form"
            element={<EmployeeForm />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
