import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardBox from './DashboardBox';

const BASE_URL = import.meta.env.VITE_API_URL;

const ReportsSection = () => {
  const [items, setItems] = useState([]);

  const fetchReports = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/reports/`);
      const reportDescriptions = res.data.map((r) => r.description || 'No description');
      setItems(reportDescriptions);
    } catch (err) {
      console.error('Error fetching reports:', err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <DashboardBox
      title="Recent Reports"
      items={items}
      link="/reports"
    />
  );
};

export default ReportsSection;