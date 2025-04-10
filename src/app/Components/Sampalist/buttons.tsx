import React from 'react'

function Buttons() {
  return (
    <div className=' flex  pt-16   '>
       <nav className="space-y-3">
        <a  className="block text-sm hover:bg-[#E33C12] text-white px-3 py-1">Dashboard</a>
        <a  className="block text-sm hover:bg-[#E33C12] text-white px-3 py-1 ">Profile Managements</a>
        <a className="block text-sm hover:bg-[#E33C12] text-white px-3 py-1 ">Sample Management</a>
        <a  className="block text-sm hover:bg-[#E33C12] text-white px-3 py-1 ">Analytics</a>
        <a  className="block text-sm px-2 text-[#E33C12] hover:text-red-400">Logout</a>
      </nav>
        
    </div>
  )
}

export default Buttons