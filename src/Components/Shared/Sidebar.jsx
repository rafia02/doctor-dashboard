import React, { useState } from 'react';
import { FaCalendarAlt, FaCog, FaRegEnvelope, FaRegUser, FaTachometerAlt, FaUserFriends } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import "../../App.css";
import { RiCalendarCheckLine, RiCapsuleLine, RiMedicineBottleLine } from 'react-icons/ri';
import { BsCalendar4Event } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuWarehouse } from 'react-icons/lu';
import { CgNotes } from 'react-icons/cg';
import { FaRegNoteSticky } from 'react-icons/fa6';
import { GrDocumentNotes } from 'react-icons/gr';
import { TbMedicineSyrup } from 'react-icons/tb';
import { PiCalendarCheck } from 'react-icons/pi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("/"); // State to track selected menu

    return (
        <div className=' '>
            <h2 className="text-xl font-bold mb-8">Doctors App</h2>
            <ul className='flex flex-col gap-3 text-gray-300'>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/")}
                >
                    <RxDashboard className="mr-4 2xl:text-2xl text-xl" />
                    <Link to="/" className="block 2xl:text-xl">
                        Dashboard
                    </Link>
                </li>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/appointments" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/appointments")}
                >
                    <PiCalendarCheck className="mr-4 2xl:text-3xl text-2xl" />
                    <Link to="/appointments" className="block 2xl:text-xl">
                        Appointments
                    </Link>
                </li>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/patients" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/patients")}
                >
                    <FaRegUser className="mr-4 2xl:text-2xl text-xl" />
                    <Link to="/patients" className="block 2xl:text-xl">
                        Patients
                    </Link>
                </li>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/settings" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/settings")}
                >
                    <FaRegEnvelope className="mr-4 2xl:text-2xl text-xl" />
                    <Link to="/settings" className="block 2xl:text-xl">
                        Message
                    </Link>
                </li>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/settings" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/settings")}
                >
                    <RiCapsuleLine className="mr-4 2xl:text-3xl text-2xl" />
                    <Link to="/settings" className="block 2xl:text-xl">
                        Medication
                    </Link>
                </li>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/settings" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/telemedicine")}
                >
                    <RiMedicineBottleLine className="mr-4 2xl:text-3xl text-2xl" />
                    <Link to="/telemedicine" className="block 2xl:text-xl">
                    Telemedicine
                    </Link>
                </li>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/settings" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/settings")}
                >
                    <FaCog className="mr-4 2xl:text-2xl text-xl" />
                    <Link to="/settings" className="block 2xl:text-xl">
                        Settings
                    </Link>
                </li>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/settings" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/settings")}
                >
                    <IoDocumentTextOutline className="mr-4 2xl:text-3xl text-2xl" />
                    <Link to="/settings" className="block 2xl:text-xl">
                        Documents
                    </Link>
                </li>


                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/settings" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/billing")}
                >
                    <LuWarehouse className="mr-4 2xl:text-2xl text-xl" />
                    <Link to="/billing" className="block 2xl:text-xl">
                    Billing
                    </Link>
                </li>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/settings" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/settings")}
                >
                    <CgNotes className="mr-4 2xl:text-2xl text-xl" />
                    <Link to="/settings" className="block 2xl:text-xl">
                        Notes
                    </Link>
                </li>

                <li
                    className={`flex p-[10px] items-center duration-300 cursor-pointer rounded-l ${selectedMenu === "/settings" ? "bg-secondary text-primary" : "hover:text-white"
                        }`}
                    onClick={() => setSelectedMenu("/settings")}
                >
                    <IoIosLogOut className="mr-4 2xl:text-3xl text-2xl" />
                    <Link to="/settings" className="block 2xl:text-xl">
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
