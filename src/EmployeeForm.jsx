
import { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="card shadow-sm mx-auto form-card">
      <div className="card-body p-4">
        <h2 className="mb-4">Employee Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Designation</label>
            <input
              className="form-control"
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Enter designation"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              className="form-control"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              className="form-control"
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              min="0"
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>

        {submitted && (
          <div className="alert alert-success mt-3">
            Form submitted successfully for this session.
            No data was sent to a server.
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeForm;
