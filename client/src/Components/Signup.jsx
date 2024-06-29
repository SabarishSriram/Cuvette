import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Signup() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate()

    const handlename=(e)=>{
        setname(e.target.value)
    }
    const handleemail=(e)=>{
        setemail(e.target.value)
    }
    const handlenumber=(e)=>{
        setnumber(e.target.value)
    }
    const handlepass=(e)=>{
        setpassword(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        const value={name, number, email,password}
        axios.post('http://localhost:3001/student',value)
        .then(result=> {console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }
    const send=()=>{
        navigate('/login')
    }


  return (
    <div className=''>
        <div className=' rounded-b-2xl shadow-lg bg-white border-b border-[#EBF0F5] '>
            <img src="../../assests/logo.svg" className='w-32 py-5 ml-10' alt="" />
        </div>
        <div className='flex flex-col mt-16 bg-white items-center border-[1px] shadow-lg border-[#EBF0F5] w-2/5 mx-auto rounded-2xl'>
            <div>
                <p className='font-semibold text-xl border-b px-20 py-4'>CREATE ACCOUNT</p>
            </div>
            <div className='flex mt-3'>
                <div>
                    <p className='font-semibold text-md text-[#566474]'>Name</p>
                    <input 
                        type="text" 
                        className='border border-[#bbc3cb] py-2 px-2 rounded-md' 
                        placeholder='Enter Name'
                        onChange={handlename}
                        value={name} />
                </div>
                <div className='ml-10'>
                    <p className='font-semibold text-md text-[#566474]'>Email Address</p>
                    <input 
                        type="email" 
                        className='border border-[#bbc3cb] py-2 px-2 rounded-md' 
                        placeholder='Enter Email Address'
                        onChange={handleemail} 
                        value={email}/>
                </div>
            </div>
            <div className='flex mt-5'>
                <div>
                    <p className='font-semibold text-md text-[#566474]'>Mobile Number</p>
                    <input 
                        type="number"  
                        className='border border-[#bbc3cb] py-2 px-2 rounded-md' 
                        placeholder='Enter Mobile Number'
                        onChange={handlenumber}
                        value={number} />
                </div>
                <div className='ml-10'>
                    <p className='font-semibold text-md text-[#566474]'>Password</p>
                    <input 
                        type="password"  
                        className='border border-[#bbc3cb] py-2 px-2 rounded-md' 
                        placeholder='Enter Password'
                        onChange={handlepass}
                        value={password} />
                </div>
            </div>
            <div className='flex'>
                <div className='flex mt-5'>
                    <input 
                        className='w-6' 
                        type="checkbox"/>
                    <p className='ml-2'>I agree to </p><p className='ml-1 text-[#445EE2]'> Terms & Conditions</p>
                </div>
            </div>
            <div>
                <button onClick={handlesubmit} className='bg-[#142683] mt-5 mb-3 text-white py-2 px-16 font-bold rounded-md'>Create New Account</button>
            </div>
            
            <div className='flex mb-5'>
                <p className='ml-2'>Have an account?</p><a onClick={send} className='ml-1 cursor-pointer text-[#445EE2]'>Login Now</a>
            </div>
           
        </div>
    </div>
    
  )
}

export default Signup