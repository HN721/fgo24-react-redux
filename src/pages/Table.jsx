import React, { useState, useEffect } from "react";

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-2xl shadow">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-700">No</th>
              <th className="px-4 py-3 font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 font-medium text-gray-700">Gender</th>
              <th className="px-4 py-3 font-medium text-gray-700">Age</th>
              <th className="px-4 py-3 font-medium text-gray-700">Smoker</th>
              <th className="px-4 py-3 font-medium text-gray-700">Type of</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                <td className="px-4 py-2 text-gray-600">{item.firstName}</td>
                <td className="px-4 py-2 text-gray-600">{item.gender}</td>
                <td className="px-4 py-2 text-gray-600">{item.age}</td>
                <td className="px-4 py-2 text-gray-600">
                  {item.smoker ? "Yes" : "No"}
                </td>
                <td className="px-4 py-2 text-gray-600">{item.cigare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
