import React from 'react'
import { Link } from 'react-router-dom'

const UnresolvedTickets = () => {
    const unresolvedTickets = [
        { 
            id:1,
            title: 'Waiting on Feature Request',
            count: 4238
        },
        {
            id:2,
            title: 'Awaiting Customer Response',
            count: 1005
        },
        {
            id:3,
            title: 'Awaiting Developer Fix',
            count: 914
        },
        {
            id:4,
            title: 'Pending',
            count: 281
        }
    ]
  return (
    <div className='max-w-[546px] w-full bg-[#ffffff] border vorder-[#DFE0EB] rounded-lg'>
        <div className='w-full flex items-center justify-between p-8'>
            <div>
                <h3 className='font-bold text-[19px] leading-6 text-[#252733]'>Unresolved tickets</h3>
                <p className='text-[12px] font-semibold leading-4 text-[#6d7ac3] mt-2'><span className='text-[#9FA2B4]'>Group:</span>Support</p>
            </div>
            <Link className='text-[#3751FF] text-[14px] leading-5 font-semibold' to="/tickets">
                View Details
            </Link>
        </div>
        <ul className='w-full'>
            {
                unresolvedTickets.map((item, index) => {
                    return (
                        <li className='px-8 py-5 flex justify-between unresolved-ticket-item' key={index}>
                            <h4 className='text-[14px] leading-5 text-[#252733] font-semibold'>{item.title}</h4>
                            <span className='text-[#9FA2B4] text-[14px] leading-5 font-semibold'>{item.count}</span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default UnresolvedTickets