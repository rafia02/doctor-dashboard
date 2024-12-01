import React from 'react'
import AppointmentList from './AppointmentList'

const Details = () => {
    return (
        <div>
            {/* name  */}
            <div className='bg-gradient-to-r shadow p-5 rounded-md from-primary text-gray-200 via-[#5754a7] to-[#7876a7]'>
                <h1 className='capitalize text-2xl font-semibold mb-2'>Hello dr jakson santo</h1>
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