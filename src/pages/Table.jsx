import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../redux/slice/Form";

export default function Table() {
  const [data, setData] = useState([]);
  const formData = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  useEffect(() => {
    if (formData) {
      setData(formData);
    }
  }, [formData]);
  const handleDelete = (index) => {
    dispatch(removeData(index));
  };
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
              <th className="px-4 py-3 font-medium text-gray-700">Action</th>
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
                <td className="px-4 py-2 text-gray-600">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
