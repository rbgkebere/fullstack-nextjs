'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
 

export default function SignUpPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        email:'',
        password:'',
        username:'',
    })

    const [loading, setloading]=useState(false)
    const [buttonDisabled,setbuttonDisabled]=useState(false)
    
    const onSignUp = async ()=>{

        try {
            setloading(true)
            const response = await axios.post('/api/users/signup',user)
            console.log('Signup success. This is response.data: ', response.data)
            router.push('/login')
        } catch (error:any) {
            console.log('Signup failed', error.message)
            toast.error(error.message)
        }finally{
            setloading(false)
        }
    }

    useEffect(()=>{
        if (user.email.length>0 && user.username.length>0 &&
            user.password.length>0
        ){
            setbuttonDisabled(false)
        }else{
            setbuttonDisabled(true)
        }
    },[user])



  return (
    <div className='flex flex-col items-center justify-center 
                    min-h-screen py-2'>
       
      <h1>{loading? 'Loading':'Signup'}</h1>
      <hr />
      <label htmlFor='username'>username</label>
      <input 
      type="text" 
      id='username' 
      value={user.username} 
      onChange={(e) => setUser({...user, username:e.target.value})}
      placeholder='username'
      className='p-2 border border-gray-300 rounded-lg mb-4
                 focus:outline-none focus:border-gray-600' 
      />
    
      <label htmlFor='email'>email</label>
      <input 
      type="text" 
      id='email' 
      value={user.email} 
      onChange={(e) => setUser({...user, email:e.target.value})}
      placeholder='email'
      className='p-2 border border-gray-300 rounded-lg mb-4
                 focus:outline-none focus:border-gray-600' 
      />

      <label htmlFor='password'>password</label>
      <input 
      type="password" 
      id='password' 
      value={user.password} 
      onChange={(e) => setUser({...user, password:e.target.value})}
      placeholder='password'
      className='p-2 border border-gray-300 rounded-lg mb-4
                 focus:outline-none focus:border-gray-600' 
      />

      <button className='p-2 border border-gray-300 rounded-lg mb-4
      focus:outline-none focus:border-gray-600'
      onClick={onSignUp}
      >{buttonDisabled?'Fill the form':'Signup'}</button>
      <Link href='/login'>Login here</Link>
    </div>
  )
}
