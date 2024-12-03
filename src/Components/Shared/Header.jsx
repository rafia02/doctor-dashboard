import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaCalendarAlt, FaSearch, FaUserCircle } from 'react-icons/fa'
import { GoPlusCircle } from 'react-icons/go'
import { IoNotificationsOutline } from 'react-icons/io5'

const Header = () => {
  const [notifications, setNotifications] = useState(null)
  const [showNotifications, setShowNotifications] = useState([
    {
      title: "New Message",
      description: "You have a new message from Dr. Smith.",
      time: "5 minutes ago",
      isUnread: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCx9XuYFwY_SEGeTTKLGhF0-i60ZNcqVltw&s", // Replace with actual image URL
    },
    {
      title: "Appointment Confirmed",
      description: "Your appointment with Dr. Alice is confirmed.",
      time: "1 hour ago",
      isUnread: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCx9XuYFwY_SEGeTTKLGhF0-i60ZNcqVltw&s", // Replace with actual image URL
    },
    {
      title: "Reminder",
      description: "Don't forget your health checkup tomorrow.",
      time: "Yesterday",
      isUnread: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCx9XuYFwY_SEGeTTKLGhF0-i60ZNcqVltw&s", // Replace with actual image URL
    },
    {
      title: "Special Offer",
      description: "Get 20% off on your next consultation!",
      time: "2 days ago",
      isUnread: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCx9XuYFwY_SEGeTTKLGhF0-i60ZNcqVltw&s", // Replace with actual image URL
    },
  ]);

  return (
    <div className='mb-2'>
      <div className="flex justify-between items-center py-4">
        {/* <div className="hidden md:flex items-center py-2">
          <CiSearch className="text-gray-500 mr-3 text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-secondary"
          />
        </div> */}


        <div className="hidden md:flex w-1/2 items-center relative">
          <CiSearch className="absolute left-3 text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full bg-secondary pl-10 pr-4 py-2 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          />
        </div>


        <div className="flex items-center">




          <div className="relative group">
            {/* Notification Icon */}
            <IoNotificationsOutline className="text-gray-500 text-3xl cursor-pointer" />

            {/* Notification Badge */}
            {notifications > 0 || (
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {notifications}
              </div>
            )}

            {/* Dropdown Notifications */}
            <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-10px] transition-all duration-300 z-10">
              <div className="p-4">
                <div className='flex justify-between items-center'>
                  <h3 className=" font-bold text-gray-700">Notifications</h3>
                  <h3 className="text-sm text-primary font-bold">Mark all as read</h3>
                </div>

                <div className='text-sm mt-2 flex gap-8'>
                  <button className=' focus:border-b-2 focus:border-b-primary'>All</button>
                  <button className=' focus:border-b-2 focus:border-b-primary'>Unread</button>
                </div>


                {/* Notifications List */}
                <ul className="mt-4 space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
                  {showNotifications.length > 0 ? (
                    showNotifications.map((notification, index) => (
                      <li
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-md ${notification.isUnread ? "bg-gray-100 font-bold" : "bg-white"
                          } hover:bg-gray-200 transition`}
                      >
                        {/* Notification Image */}
                        <img
                          src={notification.image}
                          alt={notification.title}
                          className="w-10 h-10 rounded-full object-cover"
                        />

                        {/* Notification Details */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800">
                            {notification.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {notification.description}  
                            <span className='text-primary'> View</span>
                          </p>
                          <p className="text-[10px] text-gray-500 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center">No notifications found.</p>
                  )}
                </ul>
              </div>
            </div>
          </div>





          {/* <button
            className="flex items-center gap-2 px-4 py-[10px] bg-primary text-gray-100 font-semibold rounded "
          >
            <GoPlusCircle className="text-xl" /> 
            Make an Appointment
          </button> */}

        </div>
      </div>
    </div>
  )
}

export default Header