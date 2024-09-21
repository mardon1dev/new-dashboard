import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Overview, Agents, Articles,Contacts,Ideas,Settings,Subscription,Tickets,NotFound } from '../pages';
import Header from '../components/Header';


const Routers = () => {
  return (
    <div className='w-[100%] p-[30px] bg-[#F7F8FC] min-h-screen'>
        <Header />
        <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default Routers