import { FaUser, FaCog, FaSignOutAlt, FaClipboardList, FaUsers } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-900 text-white flex flex-col justify-between shadow-lg">
    <div>
      <div className="p-6 text-2xl font-bold border-b border-gray-700">🌱 TreeCraze</div>
      <nav className="mt-6 space-y-4 px-6 text-sm font-medium">
        <a href="#" className="flex items-center gap-3 hover:text-green-400 transition"><FaClipboardList /> Reports</a>
        <a href="#" className="flex items-center gap-3 hover:text-green-400 transition"><FaUsers /> Reporters</a>
        <a href="#" className="flex items-center gap-3 hover:text-green-400 transition"><FaUsers /> Volunteers</a>
      </nav>
    </div>
    <div className="px-6 py-4 border-t border-gray-700 space-y-3 text-sm font-medium">
      <a href="#" className="flex items-center gap-3 hover:text-green-400 transition"><FaUser /> Admin Profile</a>
      <a href="#" className="flex items-center gap-3 hover:text-green-400 transition"><FaCog /> Settings</a>
      <a href="#" className="flex items-center gap-3 hover:text-red-400 transition"><FaSignOutAlt /> Logout</a>
    </div>
  </div>
);

export default Sidebar;