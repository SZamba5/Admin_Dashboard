import React, { useState } from 'react';
import './Reports.css';

const Reports = () => {
  const initialReports = [
    { id: 1, title: 'Monthly Parking Revenue', date: '2024-11-01', summary: 'Total revenue for October: $15,000' },
    { id: 2, title: 'Occupancy Rate Analysis', date: '2024-10-25', summary: 'Average occupancy rate: 85%' },
    { id: 3, title: 'Maintenance Schedule', date: '2024-10-20', summary: 'Upcoming maintenance for Lot A on Nov 15' },
    { id: 4, title: 'User Satisfaction Survey', date: '2024-10-15', summary: 'Overall satisfaction rate: 4.2/5' },
    { id: 5, title: 'Peak Hours Report', date: '2024-10-10', summary: 'Busiest hours: 9-11 AM and 4-6 PM' },
  ];

  const [reports, setReports] = useState(initialReports);
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReport, setNewReport] = useState({ title: '', date: '', summary: '' });

  const handleViewDetails = (id) => {
    setSelectedReportId(selectedReportId === id ? null : id);
  };

  const handleDismiss = (id) => {
    setReports(reports.filter(report => report.id !== id));
    if (selectedReportId === id) {
      setSelectedReportId(null);
    }
  };

  const handleAddReport = () => {
    setShowAddForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport({ ...newReport, [name]: value });
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    const id = reports.length > 0 ? Math.max(...reports.map(r => r.id)) + 1 : 1;
    const reportToAdd = { ...newReport, id };
    setReports([...reports, reportToAdd]);
    setNewReport({ title: '', date: '', summary: '' });
    setShowAddForm(false);
  };

  return (
    <div className="reports-container">
      <h2>Reports</h2>
      <button onClick={handleAddReport} className="add-report-btn">Add New Report</button>
      {showAddForm && (
        <form onSubmit={handleSubmitReport} className="add-report-form">
          <input
            type="text"
            name="title"
            value={newReport.title}
            onChange={handleInputChange}
            placeholder="Report Title"
            required
          />
          <input
            type="date"
            name="date"
            value={newReport.date}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="summary"
            value={newReport.summary}
            onChange={handleInputChange}
            placeholder="Report Summary"
            required
          />
          <button type="submit">Submit Report</button>
          <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
        </form>
      )}
      <div className="reports-list">
        {reports.map((report) => (
          <React.Fragment key={report.id}>
            <div className="report-item">
              <div className="report-info">
                <h3>{report.title}</h3>
                <p>Date: {report.date}</p>
              </div>
              <div className="report-actions">
                <button onClick={() => handleViewDetails(report.id)}>
                  {selectedReportId === report.id ? 'Hide Details' : 'View Details'}
                </button>
                <button onClick={() => handleDismiss(report.id)}>Dismiss</button>
              </div>
            </div>
            {selectedReportId === report.id && (
              <div className="report-details">
                <p>{report.summary}</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Reports;