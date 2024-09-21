import React from 'react'
import Box from '../Box/Box'
import TrendChart from './TrendGraph'
import CurrentDateTime from '../CurrentDate'
const Trends = ({trends}) => {

  return (
    <div className='w-full flex justify-between mt-[30px] bg-[#ffffff] rounded-lg border border-[#DFE0EB]'>
        <div className='w-full'>
            <div className='p-8 flex items-center justify-between'>
                <div>
                    <h2 className='text-lg leading-6 font-bold'>Today's trends</h2>
                    <CurrentDateTime />
                </div>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <span className='w-4 h-[3px] rounded-full bg-[#3751FF] block'></span>
                        <span className='text-xs leading-4 text-left text-[#9FA2B4]'>Today</span>                        
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <span className='w-4 h-[3px] rounded-full bg-[#DFE0EB] block'></span>
                        <span className='text-xs leading-4 text-left text-[#9FA2B4]'>Yesterday</span>                        
                    </div>
                </div>
            </div>
            <TrendChart />
        </div>
        <div className='w-[40%]'>
            {
                trends.map((item, index) => {
                    return (
                        <Box style={"overview-trend-box"} key={index} item={item} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Trends