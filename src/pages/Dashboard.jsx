import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import DashboardBox from '../components/DashboardBox';

const BASE_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [reports, setReports] = useState([]);
  const [reporters, setReporters] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/reports/`);
        const data = res.data;

        // Extract descriptions, reporters, volunteers
        setReports(data.map((r) => r.description || 'No description'));
        setReporters([...new Set(data.map((r) => r.reporter_name || 'Unknown'))]);
        setVolunteers([...new Set(data.map((r) => r.volunteer_name || 'Unassigned'))]);
      } catch (err) {
        console.error('Error fetching reports:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardBox title="Recent Reports" items={reports} link="/reports" />
        <DashboardBox title="Top Reporters" items={reporters} link="/reporters" />
        <DashboardBox title="Active Volunteers" items={volunteers} link="/volunteers" />
      </main>
    </div>
  );
};

export default Dashboard;