import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate()


  const [formData , setFormData] = useState({
    email:"", password:""
  })

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event){
    setFormData((prevData)=> (
      {
        ...prevData,
        [event.target.name] : event.target.value
      }
    ) )
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true)
    toast.success("Logged In Successfully.")
    navigate("/dashboard")
    console.log("Printing the Log In data..")
    console.log(formData)
  }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>

            <input 
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email Address'
                name='email' 
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px]'
            />

            
        </label>

        <label className='w-full relative'>
            <p className='text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>

            <input 
                required
                type={showPassword ? ("text"): ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px]'
            />
            
            <span className='absolute right-3 top-[38px] cursor-pointer' 
              onClick={ () =>setShowPassword ((prev) => !prev)}>
              {
                showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)
               }
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
            </Link>
            
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
    </form>
  )
}

export default LoginForm;