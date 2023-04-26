import React from 'react'
import Image from 'next/image'

const Cards = () => {
  return (
    <div className='flex flex-col py-16 px-16'>
        <div className='flex flex-row gap-10 justify-center'>
            <div className='bg-gray-extra p-5 rounded-3xl hover:bg-black w-96 h-32 flex flex-col gap-1 shadow-md'>
              <Image
                src="/images/huaysod.png"
                alt="huaysod"
                width={512}
                height={96}
              />
              <div className='bg-black w-16 h-14 py-1 text-white rounded-3xl text-center font-semibold'>
                <p>3ตัว</p>
              </div>
            </div>
            <div className='bg-gray-extra p-5 rounded-3xl w-96 h-32 items-center'>
              <Image
                src="/images/fox888.png"
                alt="fox888"
                width={256}
                height={96}
              />
            </div>
        </div>
    </div>
  )
}

export default Cards