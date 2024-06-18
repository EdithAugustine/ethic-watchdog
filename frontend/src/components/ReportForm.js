import React, { useState } from 'react';

const ReportForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitReport = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/reports/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });
    if (response.ok) {
      alert('Report submitted successfully');
    } else {
      alert('Failed to submit report');
    }
  };

  return (
    <form onSubmit={submitReport}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      ></textarea>
      <button type="submit">Submit Report</button>
    </form>
  );
};

export default ReportForm;
