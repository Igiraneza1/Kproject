import React from "react";

const Registered = ({ messages }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Registered People</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-red-700 text-white">
            <tr>
              <th className="p-2">Email</th>
              <th className="p-2">First Name</th>
              <th className="p-2">Last Name</th>
              <th className="p-2">District</th>
              <th className="p-2">Residence</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages && messages.length > 0 ? (
              messages.map((msg, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{msg.email}</td>
                  <td className="p-2">{msg.name1}</td>
                  <td className="p-2">{msg.name2}</td>
                  <td className="p-2">{msg.district}</td>
                  <td className="p-2">{msg.residence}</td>
                  <td className="p-2">{msg.phone}</td>
                  <td className="p-2">{msg.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-2 text-center">
                  No registered people yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registered;
