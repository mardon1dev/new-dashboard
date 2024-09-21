import React from 'react'
import Box from '../components/Box/Box'
import Trends from '../components/Trends/Trends'
import UnresolvedTickets from '../components/UnresolvedTickets/UnresolvedTickets'
import Todo from '../components/To-Do/Todo'

const Overview = () => {
  const data1 = [
    {
      id:1,
      type: 'Unresolved',
      count: 60
    },
    {
      id:2,
      type: 'Overdue',
      count: 16
    },
    {
      id:3,
      type: 'Open',
      count: 43
    },
    {
      id:4,
      type: 'On hold',
      count: 64
    }
  ]

  const trends = [
    {
      id:1,
      type: 'Resolved',
      count: 449
    },
    {
      id:2,
      type: 'Received',
      count: 426
    },
    {
      id:3,
      type: 'Average first response time',
      count: '33m'
    },
    {
      id:4,
      type: 'Average response time',
      count: '3h 8m'
    },
    {
      id:5,
      type: 'Resolution within SLA',
      count: '84%'
    }
  ]
  return (
    <div className='overview w-full'>
      <div className='w-full flex justify-between gap-[30px]'>
        {
          data1.map((item, index) => {
            return (
              <Box style={"overview-top-box"} key={index} item={item}/>
            )
          })
        }
      </div>
      <div>
        <Trends trends={trends} />
        <div className='w-full flex justify-between mt-[30px]'>
          <UnresolvedTickets />
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default Overview