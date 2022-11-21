import React from 'react'
import { Animation3 } from '../desktop/Animations'


const SecondFrame = () => {
  return (
    <div className='text-white  centerColumn  text-center w-fit h-fit  gap-10 mb-10'>
      <div className='text-3xl font-semibold font-opensans leading-9 max-w-9775'>
                      We believe our business has greater potential for even more growth with the creation of a new listed pure-pay alternative asset manager.
      </div>
      <div className='flex justify-center pr-64 '>
                    <svg width="268" height="168" viewBox="0 0 268 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="264.5" cy="3.5" r="3.5" fill="#F5F5F5"/>
                          <line x1="264.5" y1="4" x2="264.5" y2="84" stroke="#F5F5F5"/>
                          <line x1="0.5" y1="168" x2="0.5" y2="83" stroke="#F5F5F5"/>
                          <line x1="1" y1="83.5" x2="265" y2="83.5" stroke="#F5F5F5"/>
                          </svg>
      </div>
      <div className='flex  w-fit px-40 gap-20 '>
              <div className=' flex flex-col items-start pl-32'>
                      <div className='flex text-white text-4.75xl  font-mediumplus font-playfair  0'>Two entities, distinct offerings</div>
                      <div className='textContent max-w-70 text-left'>
                        Each with day-to-day operations preserved and the focus of a dedicated management team.
                      </div>
              </div>
              <div className='  -mt-52    items-end'>
                 <Animation3 />
              </div>

      </div>
      <div className='ml-7  -mt-40'>
                         <svg width="554" height="139" viewBox="0 0 554 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" x2="0.5" y2="100" stroke="#F5F5F5"/>
                <line x1="553.5" y1="139" x2="553.5" y2="99" stroke="#F5F5F5"/>
                <line x1="1" y1="99.5" x2="554" y2="99.5" stroke="#F5F5F5"/>
                </svg>
      </div>
    </div>
  )
}

export default SecondFrame