import React from 'react'

const Cards = () => {
  return (
    <div  className=" max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
        {/*cards*/}
    <div className=' rounded-xl relative'>
        {/*overlay */}
        <div className=' absolute h-full w-full bg-black/40 rounded-xl text-white text-right'>
            <p className=' font-bold text-2xl px-2 pt-4'> ارسال رایگان</p>
            <p className='px-2'> 5% تخفیف</p>
            <button className=' border-white bg-white text-black absolute  right-4 bottom-4'>سفارش دهید</button>


        </div>
        <img className=' max-h-[160px] rounded-xl md:max-h-[200px] w-full object-cover ' src="https://images.pexels.com/photos/3996159/pexels-photo-3996159.jpeg" alt="" />
    </div>
        {/*cards*/}
    <div className=' rounded-xl relative'>
        {/*overlay */}
        <div className=' absolute h-full w-full bg-black/40 rounded-xl text-white text-right'>
            <p className=' font-bold text-2xl px-2 pt-4'>منتخب های این ماه</p>
            <p className='px-2'> 5% تخفیف</p>
            <button className=' border-white bg-white text-black absolute  right-4 bottom-4'>سفارش دهید</button>


        </div>
        <img className=' max-h-[160px] rounded-xl md:max-h-[200px] w-full object-cover ' src="https://images.pexels.com/photos/3996159/pexels-photo-3996159.jpeg" alt="" />
    </div>
        {/*cards*/}
    <div className=' rounded-xl relative'>
        {/*overlay */}
        <div className=' absolute h-full w-full bg-black/40 rounded-xl text-white text-right'>
            <p className=' font-bold text-2xl px-2 pt-4'>رستوران های جدید</p>
            <p className='px-2'> 5% تخفیف</p>
            <button className=' border-white bg-white text-black absolute  right-4 bottom-4'>سفارش دهید</button>


        </div>
        <img className=' max-h-[160px] rounded-xl md:max-h-[200px] w-full object-cover ' src="https://images.pexels.com/photos/3996159/pexels-photo-3996159.jpeg" alt="" />
    </div>
    
    </div>
  )
}

export default Cards