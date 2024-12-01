import React, { useState } from 'react'
import Sidebar from '../Components/Shared/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Shared/Header'
import { FaXmark } from 'react-icons/fa6'
import { BiMenu } from 'react-icons/bi'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex  bg-gray-100">
    {/* Sidebar */}


    <button
      className="md:hidden fixed top-5 left-4 z-20 bg-primary text-white p-2 rounded"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      {isSidebarOpen ? <FaXmark className="w-6 h-6" /> : <BiMenu className="w-6 h-6" />}
    </button>




    <div

      className={`fixed lg:static min-h-screen inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-[300px]  bg-[#435b98] text-white pl-5 py-5 transition-transform duration-200 ease-in-out z-10 shadow-lg`}
    // className={` transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    //   } lg:translate-x-0 md:w-96 h-full bg-[#435b98]  text-white p-5 transition-transform duration-200 ease-in-out z-10 shadow-lg`}
    >
      <div className="">

       <Sidebar></Sidebar>
 
      </div>

    </div>




    {/* Main Content */}


    {/* className=" flex-wrap  px-4 md:p-6 py-5 md:py-6 " */}

    <div className="w-full max-h-screen overflow-y-auto no-scrollbar">

      {/* <header className="flex ml-12 md:ml-0 justify-between items-center mb-6">
          <h1 className="text-3xl text-primary font-semibold">Dashboard</h1>
          <button className="bg-primary text-white px-4 py-2 rounded ">
            Logout
          </button>
        </header> */}

      <section className="w-full px-5 rounded">

        <Header></Header>

        {/* <div className="flex  mt-5 justify-end items-center pb-6">
          <button className="bg-primary text-white px-5 py-2 rounded ">
            Logout
          </button>
        </div> */}

        <div className="mb-10  w-full">
          <Outlet></Outlet>
        </div>
      </section>
    </div>

    {/* Overlay for Mobile */}
    {isSidebarOpen && (
      <div
        className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      ></div>
    )}












    {/* <main className="flex-1 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
            Logout
          </button>
        </div>
      </header>
      <section className="bg-white shadow-md rounded p-6">
        {children}
      </section>
    </main> */}
  </div>
  )
}

export default Layout