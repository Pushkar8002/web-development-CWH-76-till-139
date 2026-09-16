import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex justify-around bg-slate-800 text-white py-4 text-xs'>
    <div className="text-center">Copyright ©️ Facebook | All rights reserved</div>
    <ul className='flex gap-2 text-sm'>
        <li className='text-xs'><Link href='/'>Home</Link></li>
        <li className='text-xs'><Link href='/about'>About</Link></li>
        <li className='text-xs'><Link href='/contact'>Contact</Link></li>
    </ul>
</footer>
  )
}

export default Footer