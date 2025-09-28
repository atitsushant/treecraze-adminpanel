const DashboardBox = ({ title, items, link }) => (
  <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition w-full">
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <a href={link} className="text-sm text-blue-500 hover:underline">See all</a>
    </div>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="text-gray-600 text-sm">• {item}</li>
      ))}
    </ul>
  </div>
);

export default DashboardBox;