'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {axios} from 'axios'


export default function SignUpPage() {

    const [user, setUser] = useState({
        email:'',
        password:'',
        username:'',
    })

    const onSignUp = async ()=>{

    }




  return (
    <div className='flex flex-col items-center justify-center 
                    min-h-screen py-2'>
       
      <h1>Signup</h1>
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
      >Sign up</button>
      <Link href='/login'>Login here</Link>
    </div>
  )
}
