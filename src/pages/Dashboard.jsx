import Sidebar from '../components/Sidebar';
import DashboardBox from '../components/DashboardBox';

const Dashboard = () => {
  const reports = ['Garbage near park', 'Overflowing bin', 'Plastic dump', 'Blocked drain', 'Illegal burning'];
  const reporters = ['Amit Sharma', 'Neha Verma', 'Ravi Singh', 'Pooja Yadav', 'Karan Mehta'];
  const volunteers = ['Sana Khan', 'Deepak Joshi', 'Meera Patel', 'Rahul Dev', 'Anjali Rao'];

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