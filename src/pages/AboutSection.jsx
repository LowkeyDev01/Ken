import { motion } from 'framer-motion'
import image from '../assets/kenny.png'

export default function About() {
    return (
        <div
            id="about"
            className="w-full scroll-mt-20 bg-gray-50 grid grid-row-2 md:grid-cols-2 min-h-screen"
        >
            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="h-[55vh] md:h-screen mb-3 md:mb-0 flex flex-col justify-end md:justify-center md:pl-20 px-5"
            >
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center text-black/50 font-seven text-[0.7em] gap-2"
                >
                    <p>02</p>
                    <div className="w-16 h-[0.05em] bg-black/50"></div>
                    <p>ABOUT</p>
                </motion.div>

                <div className="flex mt-4 flex-col">

                    {/* Heading */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="-ml-1 text-5xl md:text-[4em] tracking-tighter md:tracking-normal font-six font-bold"
                    >
                        I like figuring
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.18 }}
                        className="flex gap-1 items-center"
                    >
                        <p className="-ml-1 text-5xl md:text-[4em] tracking-tighter md:tracking-normal font-six font-bold">
                            shit out
                        </p>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.45,
                                ease: "backOut"
                            }}
                            className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-green-500 mt-6 md:mt-9"
                        ></motion.div>
                    </motion.div>

                    {/* Paragraphs */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="font-seven text-sm mt-4 text-black/50"
                    >
                        I'm Ken — a Full-Stack Product Developer with an unhealthy
                        <br className="hidden md:block" />
                        amount of curiosty.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-seven text-sm mt-2 text-black/50"
                    >
                        I like understanding how things work, finding where they break,
                        <br className="hidden md:block" />
                        and turning ideas into products people can actually use.
                    </motion.p>

                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-10 md:mt-18 pl-4 w-full border-2 font-seven text-xs text-black/50 border-transparent border-l-green-500"
                    >
                        <p className="tracking-wider">
                            I'm not interested in building software just to say it
                            <br className="hidden md:block" />
                            was built.
                        </p>

                        <p className="text-black tracking-wider mt-2 font-bold">
                            I want to build useful things.
                        </p>
                    </motion.div>

                </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.9,
                    ease: "easeOut"
                }}
                className="flex justify-center items-end"
            >
                <motion.img
                    src={image}
                    initial={{ scale: 0.96 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.9,
                        ease: "easeOut"
                    }}
                    className="h-[45vh] md:h-[85vh]"
                />
            </motion.div>
        </div>
    )
}