import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate()
    
    const handleemail=(e)=>{
        setemail(e.target.value)
    }

    const handlepassword=(e)=>{
        setpassword(e.target.value)
    }
    
    const handleclick=(e)=>{
        e.preventDefault();
        const value={email,password}
        axios.post('http://localhost:3001/login',value)
        .then(result=> {
            if (result.data==="success") {
                navigate('/home')
            }
            console.log(result) 

        })
        .catch(err=>console.log(err))
    
    }
    const send=()=>{
        navigate('/signup')
    }
    

  return (
    <div className=''>
         <div className=' rounded-b-2xl shadow-lg bg-white border-b border-[#EBF0F5] '>
            <img src="../../assests/logo.svg" className='w-32 py-5 ml-10' alt="" />
        </div>
        <div className='flex flex-col mt-16 shadow-lg bg-white items-center border-[1px] border-[#EBF0F5] w-2/5 mx-auto rounded-2xl'>
            <div>
                <p className='font-semibold text-xl border-b px-20 py-4'>Sign In</p>
            </div>
            <div className='flex mt-3'>
                <div className=''>
                    <p className='font-semibold text-md text-[#566474]'>Email Address</p>
                    <input 
                        type="email" 
                        className='border border-[#bbc3cb] py-2 px-2 pr-20 rounded-md' 
                        placeholder='Enter Email Address'
                        value={email}
                        onChange={handleemail}
                        />
                </div>
            </div>
            <div className='flex mt-5'>
                <div className=''>
                    <p className='font-semibold text-md text-[#566474]'>Password</p>
                    <input 
                        type="password"  
                        className='border border-[#bbc3cb] py-2 px-2 pr-20 rounded-md' 
                        placeholder='Enter Password' 
                        value={password}
                        onChange={handlepassword}
                        />
                        
                </div>
            </div>
            <div>
                <button onClick={handleclick} className='bg-[#142683] mt-7 mb-3 text-white py-2 px-16 font-bold rounded-md'>Log In</button>
            </div>
            <div className='flex mb-7 mt-2'>
                <p className='ml-2'>Dont Have an account?</p><a onClick={send} className='ml-1 cursor-pointer text-[#445EE2]'>Sign Up Now</a>
            </div>
           
        </div>
    </div>
    
  )
}

export default Login