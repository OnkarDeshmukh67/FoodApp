import React from 'react'

const Displayrecipe = () => {
  return (
    <>
    <div className='h-auto w-60 flex flex-col'>
      <span className='w-60 h-60 border rounded-lg'>

      </span>

      <span className='flex justify-around items-center w-full h-8 mt-2'>
        <button className='w-auto h-7 rounded-lg bg-slate-500 pr-1 pl-1'>optiona</button>
        <button className='w-auto h-7 rounded-lg bg-slate-500 pr-1 pl-1'>optionb</button>
        <button className='w-auto h-7 rounded-lg bg-slate-500 pr-1 pl-1'>optionc</button>
      </span>
    </div>
    </>
  )
}

export default Displayrecipe