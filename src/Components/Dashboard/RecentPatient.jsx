import { useState } from "react";

const RecentPatient = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      gender: "Male",
      weight: 72,
      disease: "Diabetes",
      date: "2024-11-01",
      heartRate: 78,
      bloodType: "O+",
      status: "Recovered",
    },
    {
      id: 2,
      name: "Jane Smith",
      gender: "Female",
      weight: 65,
      disease: "Hypertension",
      date: "2024-11-02",
      heartRate: 82,
      bloodType: "A+",
      status: "Outpatient",
    },
    {
      id: 3,
      name: "Alice Johnson",
      gender: "Female",
      weight: 68,
      disease: "Asthma",
      date: "2024-11-03",
      heartRate: 76,
      bloodType: "B+",
      status: "Recovered",
    },
  ];

  return (
    <div className="px-5">
      <h4 className=" font-semibold mb-5">
        Recent Patient
      </h4>
      <div className="flex flex-col overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full border-gray-200">
            <thead className="text-xs bg-gray-100 text-gray-500 font-semibold tracking-wide">
              <tr>
                {/* <th className="px-6 py-4">N.o</th> */}
                <th className="whitespace-nowrap px-6 py-4 text-start">Name</th>
                <th className="whitespace-nowrap px-6 py-4">Gender</th>
                <th className="whitespace-nowrap px-6 py-4">Weight</th>
                <th className="whitespace-nowrap px-6 py-4 text-start">Disease</th>
                <th className="whitespace-nowrap px-6 py-4 text-start">Date</th>
                <th className="whitespace-nowrap px-6 py-4">Heart Rate</th>
                <th className="whitespace-nowrap px-6 py-4">Blood Type</th>
                <th className="whitespace-nowrap px-6 py-4 text-start">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs text-gray-700">
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b  transition-colors duration-200"
                >
                  {/* <td className="px-6 py-4 text-center">{index + 1}</td> */}

                  <td className="whitespace-nowrap px-6 py-4">
                    <div className='flex items-center gap-2'>
                      <img className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />  
                        <p className='text-gray-500'>Dunial sumit</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{item.gender}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.weight}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.disease}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.date}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.heartRate}</td>
                  <td className="whitespace-nowrap px-6 py-4 ">{item.bloodType}</td>
                  <td
                    className={`pl-6 py-4 ${item.status === "Recovered"
                        ? "text-green-600 font-semibold"
                        : "text-yellow-600 font-semibold"
                      }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentPatient;




















