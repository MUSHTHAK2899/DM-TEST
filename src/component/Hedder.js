import React from 'react'
import { Link } from 'react-router-dom'

export default function Hedder() {
  return (
    <header>
        <div className=' bg-cyan-900 w-full h-20 flex justify-center items-center gap-8'>
        <Link to='/' className='text-gray-400 m-0 font-bold '>TodoApp</Link>
        <Link to='/about' className='text-gray-400 m-0 font-bold '>About</Link>
        
       
        </div>
       
    </header>
  )
}
