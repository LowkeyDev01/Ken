import { GoArrowUpRight, GoDatabase } from 'react-icons/go'
import image from '../assets/kenny.png'
import { IoCodeSlashOutline, IoLogoJavascript } from 'react-icons/io5'

export default function About(){
    return(
        <div className="w-full bg-gray-50 grid grid-row-2 md:grid-cols-2 min-h-screen">
            <div className='h-[55vh] md:h-screen mb-3 md:mb-0 flex flex-col justify-center md:justify-center md:pl-20 px-10'>
                <div className='flex items-center text-black/50 font-seven text-[0.7em] gap-2'>
                    <p>02</p>
                    <div className='w-16 h-[0.05em] bg-black/50'></div>
                    <p>ABOUT</p>
                </div>
                <div className='flex mt-4 flex-col'>
                    <p className='-ml-1 text-5xl md:text-[4em] tracking-tighter md:tracking-normal font-six font-bold'>I like figuring</p>
                    <div className='flex gap-1 items-center'>
                        <p className='-ml-1 text-5xl md:text-[4em] tracking-tighter md:tracking-normal font-six font-bold'>shit out</p>
                        <div className='md:w-3 md:h-3 w-2 h-2 rounded-full bg-green-500 mt-6 md:mt-9'></div>
                    </div>
                    <p className='font-seven text-sm mt-4 text-black/50'>I'm Ken — a Full-Stack Product Developer with an unhealthy<br className='hidden md:block'></br> amount of curiosty.</p>
                    <p className='font-seven text-sm mt-2 text-black/50'>I like understanding how things work, finding where they break,<br className='hidden md:block'></br> and turning ideas into products people can actually use.</p>
                    <div className='mt-10 md:mt-18 pl-4 md:block w-full border-2 font-seven text-xs text-black/50 border-transparent border-l-green-500'>
                        <p className='tracking-wider'>I'm not interested in building software just to say it<br></br> was built.</p>
                        <p className='text-black tracking-wider mt-2 font-bold'>I want to build useful things.</p>
                    </div>
                    
                    
                </div>
                
            </div>
            <div className='flex justify-center items-end'>
                <img src={image} className='h-[50vh] md:h-[85vh]'></img>
            </div>
        </div>
    )
}