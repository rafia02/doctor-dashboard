import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaCalendarAlt, FaSearch, FaUserCircle } from 'react-icons/fa'
import { GoPlusCircle } from 'react-icons/go'
import { IoNotificationsOutline } from 'react-icons/io5'

const Header = () => {
  const [notifications, setNotifications] = useState(3)
  return (
    <div className='mb-2'>
      <div className="flex justify-between items-center py-4">
        <div className="hidden md:flex items-center py-2">
          <CiSearch className="text-gray-500 mr-3 text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-secondary"
          />
        </div>
        <div className="flex items-center">
          {/* Search Input with Icon */}
          {/* <div className="hidden md:flex items-center border rounded-lg px-4 py-2">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none"
        />
      </div> */}
          {/* User Icon */}
          {/* <IoNotificationsOutline className="text-gray-500 text-3xl mr-7" /> */}

          <div className="relative">
            {/* Notification Icon */}
            <IoNotificationsOutline className="text-gray-500 text-3xl mr-7" />

            {/* Notification Badge */}
            {notifications > 0 && (
              <div className="absolute top-0 left-4 bg-red-500 text-white text-[10px] font-bold rounded-full w-3 h-3 flex items-center justify-center">
                {notifications}
              </div>
            )}
          </div>




          <button
            className="flex items-center gap-2 px-4 py-[10px] bg-primary text-gray-100 font-semibold rounded "
          >
            <GoPlusCircle className="text-xl" /> {/* Add the icon */}
            Make an Appointment
          </button>

        </div>
      </div>
    </div>
  )
}

export default Header