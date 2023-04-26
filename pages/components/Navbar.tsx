import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col bg-black-blue h-56 w-full'>
        <div className="text-center text-5xl my-auto p-10 md:p-2 font-mitr">
            <p className='text-white py-2'>
                อันดับเว็บหวยที่ <span className='text-red-extra'>คนเข้าเยอะที่สุด</span>
            </p>
            <p className='text-white'>
                จ่ายจริงไม่มีโกง
            </p>
        </div>
    </div>
  )
}

export default Navbar