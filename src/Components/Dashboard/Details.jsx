import React from 'react'
import AppointmentList from './AppointmentList'

const Details = () => {
    return (
        <div>
            {/* name  */}
            <div className='bg-gradient-to-r shadow p-5 2xl:p-8 rounded-md from-primary text-gray-200 via-[#504da6] to-[#6866ac]'>
                <h1 className='capitalize text-2xl 2xl:text-[26px] font-semibold mb-2'>Hello dr jakson santo</h1>
                <div className='text-sm'>
                    <p>Here are your important task and report</p>
                    <p>Please check the next appointemnet</p>
                </div>
            </div>

            {/* activity  */}
            <AppointmentList></AppointmentList>
        </div>
    )
}

export default Details