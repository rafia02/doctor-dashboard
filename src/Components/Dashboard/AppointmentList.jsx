import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import RecentPatient from './RecentPatient'
import MonthlyActivityChart from './ActivityChart'
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa'

const AppointmentList = () => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 my-8 md:gap-4'>
                {/* appointemnt request  */}
                <div className='py-6 px-4 2xl:px-6 bg-white  rounded-md shadow'>
                    <div className=''>
                        <div className='flex justify-between font-semibold mb-4 items-center'>
                            <p className='2xl:text-xl'>Appointment Request</p>
                            <p className='text-sm 2xl:text-[17px] text-primary'>See All</p>
                        </div>
                    </div>

                    <div className='flex gap-2 flex-col'>
                        <div className='text-xs 2xl:text-sm flex  justify-between items-center text-gray-500'>
                            <div className='flex items-center gap-2 py-2'>
                                <img className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className=''>
                                    <p className='text-gray-500 font-semibold'>Dunial sumit</p>
                                    <p className=''>Diabetes</p>
                                </div>
                            </div>
                            <p>04/12/2024 - 10 AM</p>
                            <p className='text-primary'>Accepted</p>
                        </div>

                        <div className='text-xs 2xl:text-sm flex  justify-between items-center text-gray-500'>
                            <div className='flex items-center gap-2 py-2'>
                                <img className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className=''>
                                    <p className='text-gray-500 font-semibold'>Dunial sumit</p>
                                    <p className=''>Diabetes</p>
                                </div>
                            </div>
                            <p>04/12/2024 - 10 AM</p>
                            <div className='flex text-lg gap-1'>
                                <FaRegCheckCircle />
                                <FaRegTimesCircle className='text-red-500' />
                            </div>
                        </div>

                        <div className='text-xs 2xl:text-sm flex  justify-between items-center text-gray-500'>
                            <div className='flex items-center gap-2 py-2'>
                                <img className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className=''>
                                    <p className='text-gray-500 font-semibold'>Dunial sumit</p>
                                    <p className=''>Diabetes</p>
                                </div>
                            </div>
                            <p>04/12/2024 - 10 AM</p>
                            <div className='flex text-lg gap-1'>
                                <FaRegCheckCircle />
                                <FaRegTimesCircle className='text-red-500' />
                            </div>
                        </div>

                        <div className='text-xs 2xl:text-sm flex  justify-between items-center text-gray-500'>
                            <div className='flex items-center gap-2 py-2'>
                                <img className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className=''>
                                    <p className='text-gray-500 font-semibold'>Dunial sumit</p>
                                    <p className=''>Diabetes</p>
                                </div>
                            </div>
                            <p>04/12/2024 - 10 AM</p>
                            <div className='flex text-lg gap-1'>
                                <FaRegCheckCircle />
                                <FaRegTimesCircle className='text-red-500' />
                            </div>
                        </div>


                    </div>
                </div>

                {/* appointment  */}
                <div className='py-6 px-4 2xl:px-6 bg-white rounded-md shadow'>
                    <div className=''>
                        <div className='flex justify-between font-semibold mb-4 items-center'>
                            <p className='2xl:text-xl'>Appointment</p>
                            <div className='flex items-center gap-1'>
                                <IoIosArrowDown></IoIosArrowDown>
                                <p className='text-sm 2xl:text-[17px]'>Today</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2 flex-col'>
                        <div className='text-xs 2xl:text-sm flex duration-300 hover:bg-secondary p-2 rounded justify-between items-center text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <img className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className=''>
                                    <p className='text-gray-500 font-semibold'>Dunial sumit</p>
                                    <p className=''>Diabetes</p>
                                </div>
                            </div>
                            <p className='text-primary italic'>Finished</p>
                        </div>
                        <div className='text-xs 2xl:text-sm flex duration-300 hover:bg-secondary p-2 rounded justify-between items-center text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <img className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className=''>
                                    <p className='text-gray-500 font-semibold'>Dunial sumit</p>
                                    <p className=''>Diabetes</p>
                                </div>
                            </div>
                            <p className='font-bold'>12.00</p>
                        </div>
                        <div className='text-xs 2xl:text-sm flex duration-300 hover:bg-secondary p-2 rounded justify-between items-center text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <img className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className=''>
                                    <p className='text-gray-500 font-semibold'>Dunial sumit</p>
                                    <p className=''>Diabetes</p>
                                </div>
                            </div>
                            <p className='font-bold'>12.00</p>
                        </div>
                        <div className='text-xs 2xl:text-sm flex duration-300 hover:bg-secondary p-2 rounded justify-between items-center text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <img className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className=''>
                                    <p className='text-gray-500 font-semibold'>Dunial sumit</p>
                                    <p className=''>Diabetes</p>
                                </div>
                            </div>
                            <p className='font-bold'>12.00</p>
                        </div>
                    </div>
                </div>
            </div>



            <MonthlyActivityChart></MonthlyActivityChart>


            <div className='bg-white shadow rounded-lg py-5'>
                <RecentPatient></RecentPatient>
            </div>

        </div>
    )
}

export default AppointmentList