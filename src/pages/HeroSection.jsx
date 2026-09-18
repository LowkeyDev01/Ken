import { GoArrowUpRight, GoDatabase } from 'react-icons/go'
import image from '../assets/pfp.png'
import { IoCodeSlashOutline, IoLogoJavascript } from 'react-icons/io5'

export default function Hero(){
    return(
        <div className="w-full bg-gray-50 grid grid-row-2 md:grid-cols-2 min-h-screen">
            <div className='h-[55vh] md:h-screen mb-3 md:mb-0 flex flex-col justify-end md:justify-center md:pl-20 px-5'>
                <div className='flex gap-2 items-center'>
                    <p className='font-seven text-black/50'>Hi, I'm</p>
                    <div className='w-20 h-[0.05em] bg-black/50'></div>
                </div>
                <p className='-ml-2 text-9xl md:text-[10em] font-six font-bold'>Ken</p>
                <div className='flex items-center gap-3'>
                <p className='font-seven text-xl'>Full-Stack Product Developer</p>
                <div className='w-8 h-[0.05em] bg-green-500'></div>
                </div>
                <p className='text-black/50 font-seven text-base mt-2'>I build fast, clean and scalable web experiences that turn ideas into real products.</p>
                <div className='flex font-seven gap-4 mt-4'>
                    <a className='text-[0.75em] gap-2 flex items-center bg-black text-white px-5 rounded-3xl py-2'>View my work <GoArrowUpRight /></a>
                    <a className='text-[0.75em] gap-2 flex items-center border text-blaack px-5 rounded-3xl py-2'>About Me</a>
                </div>
                <div className='hidden md:block mt-12'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-1.5 h-1.5 rounded-full bg-green-500'></div>
                        <p className='text-[0.68em] tracking-widest font-seven text-black/50'>Available for new projects</p>
                        <div className='h-4 w-[0.05em] ml-2 bg-gray-400'></div>
                        <div className='flex gap-4'>
                            <IoCodeSlashOutline />
                            <IoLogoJavascript />
                            <GoDatabase />

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-end'>
                <img src={image} className='h-[70vh] md:h-[90vh]'></img>
            </div>
        </div>
    )
}