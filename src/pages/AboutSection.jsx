import { GoArrowUpRight, GoDatabase } from 'react-icons/go'
import image from '../assets/kenny.png'
import { IoCodeSlashOutline, IoLogoJavascript } from 'react-icons/io5'

export default function About(){
    return(
        <div className="w-full bg-gray-50 grid grid-row-2 md:grid-cols-2 min-h-screen">
            <div className='h-[55vh] md:h-screen mb-3 md:mb-0 flex flex-col justify-end md:justify-center md:pl-20 px-5'>
                <div className='flex items-center text-black/50 font-seven text-[0.7em] gap-2'>
                    <p>02</p>
                    <div className='w-16 h-[0.05em] bg-black/50'></div>
                    <p>ABOUT</p>
                </div>
                <div className='flex mt-4 flex-col'>
                    <p className='-ml-2 text-9xl md:text-[4em] tracking-tight font-six font-bold'>I like figuring</p>
                    <div className='flex gap-2 items-center'>
                        <p className='-ml-2 text-9xl md:text-[4em] font-six tracking-tight font-bold'>shit out</p>
                        <div className='w-3 h-3 rounded-full bg-green-500 mt-9'></div>
                    </div>
                    
                </div>
                
            </div>
            <div className='flex justify-center items-end'>
                <img src={image} className='h-[70vh] md:h-[85vh]'></img>
            </div>
        </div>
    )
}