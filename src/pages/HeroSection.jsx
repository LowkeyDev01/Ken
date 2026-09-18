import { motion } from 'framer-motion'
import { GoArrowUpRight, GoDatabase } from 'react-icons/go'
import image from '../assets/pfp.png'
import { IoCodeSlashOutline, IoLogoJavascript } from 'react-icons/io5'

export default function Hero() {
    return (
        <div
            id="home"
            className="scroll-mt-auto w-full bg-gray-50 grid grid-row-2 md:grid-cols-2 min-h-screen"
        >

            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="h-[55vh] md:h-screen mb-3 md:mb-0 flex flex-col justify-end md:justify-center md:pl-20 px-7 md:px-5"
            >
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex gap-2 items-center"
                >
                    <p className="font-seven text-black/50">Hi, I'm</p>
                    <div className="w-20 h-[0.05em] bg-black/50"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="-ml-2 text-9xl md:text-[10em] font-six font-bold"
                >
                    Ken
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="flex items-center gap-3"
                >
                    <p className="font-seven text-xl">
                        Full-Stack Product Developer
                    </p>

                    <div className="w-8 h-[0.05em] bg-green-500"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="text-black/50 font-seven text-base mt-2"
                >
                    I build fast, clean and scalable web experiences that turn
                    ideas into real products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="flex font-seven gap-4 mt-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="text-[0.75em] gap-2 flex items-center bg-black text-white px-5 rounded-3xl py-2 cursor-pointer"
                    >
                        View my work
                        <GoArrowUpRight />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="text-[0.75em] gap-2 flex items-center border text-black px-5 rounded-3xl py-2 cursor-pointer"
                    >
                        About Me
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="hidden md:block mt-12"
                >
                    <div className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>

                        <p className="text-[0.68em] tracking-widest font-seven text-black/50">
                            Available for new projects
                        </p>

                        <div className="h-4 w-[0.05em] ml-2 bg-gray-400"></div>

                        <div className="flex gap-4">
                            <IoCodeSlashOutline />
                            <IoLogoJavascript />
                            <GoDatabase />
                        </div>
                    </div>
                </motion.div>
            </motion.div>


            {/* RIGHT IMAGE */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.9,
                    delay: 0.25,
                    ease: "easeOut"
                }}
                className="flex justify-center items-end"
            >
                <motion.img
                    src={image}
                    initial={{ scale: 0.96 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.25,
                        ease: "easeOut"
                    }}
                    className="h-[50vh] md:h-[90vh]"
                />
            </motion.div>

        </div>
    )
}