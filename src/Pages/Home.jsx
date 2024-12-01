import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlinePhoneMissed } from 'react-icons/md'
import Details from '../Components/Details'
import Profile from '../Components/Profile'

const Homepage = () => {




  return (

    <div className='flex flex-col-reverse md:flex-row gap-5'>

      <div className='md:w-8/12'>
        <Details></Details>
      </div>


      <div className='md:w-4/12  '>
        <Profile></Profile>
      </div>
    </div>

  )
}

export default Homepage