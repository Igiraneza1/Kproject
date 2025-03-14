import React from "react";

const Message = ({ messages }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-red-700 text-white">
            <tr>
              <th className="p-2">Email</th>
              <th className="p-2">Name</th>
              <th className="p-2">Message</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{msg.email}</td>
                <td className="p-2">{msg.name}</td>
                <td className="p-2">{msg.message}</td>
                <td className="p-2">{msg.date}</td>
  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Message;
