import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { PiSuitcase } from "react-icons/pi";

function Home() {
  return (
    <div className=''>
         <div className=' rounded-b-2xl shadow-lg bg-white border-b border-[#EBF0F5] '>
            <img src="../../assests/logo.svg" className='w-32 py-5 ml-10' alt="" />
        </div>
        <div className= ' '>
            <div className='flex flex-col  items-center w-1/5 bg-white  shadow-lg rounded-r-lg'>
                <div>
                    <button className='bg-gradient-to-r mt-8 p-[3px] from-[rgb(26,4,198)] to-[#558DF9] rounded-md py-[1px] px-7 text-white font-semibold text-lg'>Edit Resume</button>
                </div>
                <div className='flex items-center p-[3px] ml-[-45px] mt-3'>   
                    <BiSolidDashboard color='#566474' className='mr-2' size={20}/><p className='font-medium text-[#566474]'>Dashboard</p>
                </div>
                <div className='flex items-center p-[3px] ml-[-25px] mt-3'>   
                    <PiSuitcase color='#566474' className='mr-2' size={20}/><p className='font-bold text-[#085aff]'>Fulltime Jobs</p>
                </div>
                <div className='flex items-center p-[3px] ml-[-45px] mt-3'>   
                    <PiSuitcase color='#566474' className='mr-2' size={20}/><p className='font-medium text-[#566474]'>Internships</p>
                </div> 
                <div className='flex items-center p-[3px] ml-[-45px] mt-3'>   
                    <PiSuitcase color='#566474' className='mr-2' size={20}/><p className='font-medium text-[#566474]'>Other Jobs</p>
                </div>     
                <div className='flex items-center p-[3px] mb-4  mt-3'>   
                    <BiSolidDashboard color='#566474' className='mr-2' size={20}/><p className='font-bold text-[#085aff]'>Guarenteed Jobs</p>
                </div>              
            </div>
            
        </div>
    </div>
  )
}

export default Home