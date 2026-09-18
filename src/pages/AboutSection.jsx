import { GoArrowUpRight, GoDatabase } from 'react-icons/go'
import image from '../assets/kenny.png'
import { IoCodeSlashOutline, IoLogoJavascript } from 'react-icons/io5'

export default function About(){
    return(
        <div className="w-full bg-gray-50 grid grid-row-2 md:grid-cols-2 min-h-screen">
            <div className='h-[55vh] md:h-screen mb-3 md:mb-0 flex flex-col justify-end md:justify-center md:pl-20 px-5'>
                <div></div>
                
            </div>
            <div className='flex justify-center items-end'>
                <img src={image} className='h-[70vh] md:h-[87vh]'></img>
            </div>
        </div>
    )
}