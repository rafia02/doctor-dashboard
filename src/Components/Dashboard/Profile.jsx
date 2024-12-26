import React, { useState } from 'react'
import { FaRegEnvelope } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlinePhoneMissed } from 'react-icons/md';

const Profile = () => {

    const [progress, setProgress] = useState(50)
    const clampedProgress = Math.min(Math.max(progress, 0), 100)


    const [isToggled, setIsToggled] = useState(false);

    const handleAnimationEnd = () => {
        setIsToggled((prev) => !prev); // Toggle state after animation completes
    }



    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <div>
            <div className='bg-white p-6 2xl:px-8 shadow rounded-lg'>
                <div className='border-b pb-5'>
                    <div className='flex items-end justify-end'>
                        <button className='text-xs 2xl:text-sm 2xl:px-3 2xl:py-1 px-2 text-end py-[3px] rounded-full bg-primary text-white'>Edit Profile</button>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-28 h-28 rounded-full bg-cover 2xl:w-40 2xl:h-40 mt-3'>
                            <img className='rounded-full h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s" alt="" />
                        </div>
                    </div>
                    <div className='capitalize text-center mt-4'>
                        <h1 className='md:text-lg lg:text-xl 2xl:text-[27px] font-semibold text-primary'>Dr. jakson Santo</h1>
                        <p className='text-xs 2xl:text-[17px] 2xl:mt-1'>Darmatology - taxas hospital</p>
                    </div>
                </div>




                <div className='pt-5'>
                    <h1 className='md:text-lg lg:text-xl 2xl:text-[27px] font-semibold capitalize text-primary'>150 people</h1>
                    <p className='text-sm 2xl:text-[17px] 2xl:mt-1'>Appointement Limit</p>

                    <div className='flex items-center mt-3 2xl:mt-5 gap-3'>
                        <div className="w-full bg-gray-200 rounded-full h-2 2xl:h-3">
                            <div
                                className="bg-primary h-2 2xl:h-3 rounded-full transition-all duration-300"
                                style={{ width: `${clampedProgress}%` }}
                            ></div>
                        </div>
                        <span className="text-xs 2xl:text-sm font-medium text-gray-700">
                            150/300
                        </span>
                    </div>

                    <div className='grid grid-cols-2 2xl:gap-x-28 gap-x-16 mt-7 gap-y-7 2xl:gap-10 py-6 border-y'>
                        <div className=''>
                            <h6 className='md:text-lg lg:text-xl 2xl:text-[27px] text-primary font-semibold'>2.526</h6>
                            <p className='text-sm 2xl:text-[17px] 2xl:mt-1'>Appointemnet</p>
                        </div>
                        <div className=''>
                            <h6 className='md:text-lg lg:text-xl 2xl:text-[27px] text-primary font-semibold'>3.526</h6>
                            <p className='text-sm 2xl:text-[17px] 2xl:mt-1'>Total Patient</p>
                        </div>
                        <div className=''>
                            <h6 className='md:text-lg lg:text-xl 2xl:text-[27px] text-primary font-semibold'>13.526</h6>
                            <p className='text-sm 2xl:text-[17px] 2xl:mt-1'>Consultation</p>
                        </div>
                        <div className=''>
                            <h6 className='md:text-lg lg:text-xl 2xl:text-[27px] text-primary font-semibold'>2.526</h6>
                            <p className='text-sm 2xl:text-[17px] 2xl:mt-1'>Return patient</p>
                        </div>
                    </div>

                    <div className='flex justify-between mt-8 items-center'>
                        <div className='bg-primary 2xl:w-44 w-28 h-24 2xl:h-32 justify-center rounded-xl flex flex-col items-center text-gray-200'>
                            <h5 className='font-semibold md:text-lg 2xl:text-[31px]'>18</h5>
                            <p className='capitalize text-[12px] 2xl:text-lg  mb-[2px]'>Missed call</p>
                            <MdOutlinePhoneMissed className='text-center md:text-lg lg:text-xl 2xl:text-[27px]' />
                        </div>

                        <div className='2xl:w-44 w-28 h-24 justify-center 2xl:h-32 rounded-xl flex flex-col text-primary  items-center border-primary border-2'>
                            <h5 className='font-semibold md:text-lg lg:text-xl 2xl:text-[31px]'>9</h5>
                            <p className='capitalize text-[12px] 2xl:text-lg mb-[2px]'>New Messages</p>
                            <FaRegEnvelope className='text-center lg:text-xl 2xl:text-[27px]' />
                        </div>
                    </div>
                </div>
            </div>


            {/* billing  */}
            <div className='bg-white px-6 2xl:px-8 py-3 2xl:py-4 mt-8 shadow rounded-lg'>
                <div className='flex justify-between mb-6 items-center'>
                    <p className='text-sm 2xl:text-[22px]'>Billing</p>
                    <div className='flex items-center gap-1'>
                        <IoIosArrowDown />
                        <p className='text-xs 2xl:text-[16px]'>February</p>
                    </div>
                </div>

                <div className='flex items-center mb-5 justify-between'>
                    <div className=''>
                        <h6 className='text-2xl text-primary font-semibold'>$2.85215</h6>
                        <p className='text-sm 2xl:text-[17px] 2xl:mt-1'>Toatal Billing</p>
                    </div>
                    <div className='text-end'>
                        <span className='bg-primary text-xs py-1 px-3 rounded-full text-gray-300 font-semibold'>+56%</span>
                        <p className='text-xs 2xl:text-sm mt-2 text-gray-500'>From last months</p>
                    </div>
                </div>

                <div className="p-3 rounded bg-gray-200">
                    <div className='flex justify-between items-center'>
                        <p className='2xl:text-lg text-sm'>Transfer automaticly</p>
                        <div
                            className={`w-12 h-5 border-2 border-primary rounded-full cursor-pointer relative overflow-hidden ${isToggled ? 'bg-primary' : 'bg-white'
                                }`}
                            onAnimationEnd={handleAnimationEnd} // Trigger state toggle after animation
                            onClick={() => setIsToggled((prev) => !prev)} // Optional manual toggle
                        >
                            <div
                                className={`w-4 h-4 rounded-full absolute transition-all duration-500 ${isToggled ? 'translate-x-7 bg-white' : 'translate-x-0 bg-primary'
                                    }`}
                            ></div>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-2 sm:text-sm pb-3 2xl:text-[17px] md:text-[13px] 2xl:text-lg mt-6 gap-3'>
                    <button className='px-2 py-2 bg-primary text-gray-200 rounded'>Send Money</button>
                    <button className='px-2 py-2 border-2 border-primary text-primary rounded'>Payment Method</button>
                </div>


            </div>
        </div>
    )
}

export default Profile