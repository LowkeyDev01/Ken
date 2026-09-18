import { motion } from "framer-motion";
import image from "../assets/last.png";
import { FaXTwitter, FaGithub, FaTelegram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

export default function Contact() {
    const links = [
        {
            name: "X (Twitter)",
            username: "@0x__Kenny",
            icon: <FaXTwitter size={15} />,
            href: "https://x.com/0x__Kenny",
        },
        {
            name: "GitHub",
            username: "lowkeydev01",
            icon: <FaGithub size={15} />,
            href: "https://github.com/lowkeydev01",
        },
        {
            name: "Telegram",
            username: "@0x__Kenny",
            icon: <FaTelegram size={15} />,
            href: "https://t.me/0x__Kenny",
        },
        {
            name: "Email",
            username: "kananaya335@gmail.com",
            icon: <FiMail size={16} />,
            href: "mailto:kananaya335@gmail.com",
        },
    ];

    return (
        <div
            id="contact"
            className="w-full scroll-mt-20 bg-gray-50 md:pl-20 px-5 md:px-25"
        >
            <div className="grid pt-20 md:grid-cols-2 min-h-screen">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="flex flex-col"
                >
                    {/* SECTION LABEL */}
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center text-black/50 font-seven text-[0.7em] gap-2"
                    >
                        <p>04</p>

                        <div className="w-16 h-[0.05em] bg-black/50"></div>

                        <p>CONTACT</p>
                    </motion.div>

                    {/* HEADING */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        className="flex mt-4 flex-col"
                    >
                        <p className="text-[3em] md:text-[2.5em] tracking-tighter md:tracking-normal font-six font-bold">
                            Let's build
                        </p>

                        <div className="flex gap-1 items-center">
                            <p className="text-[3em] -mt-7 md:text-[2.5em] tracking-tighter md:tracking-normal font-six font-bold">
                                something
                            </p>

                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.45,
                                    ease: "backOut",
                                }}
                                className="w-2 h-2 rounded-full bg-green-500 mt-2"
                            ></motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.25,
                            }}
                            className="font-seven text-sm mt-4 text-black/50"
                        >
                            Got a project, idea or just want to talk? Send me
                            <br className="hidden md:block" />
                            a message and i'll get back to you as soon as i can.
                        </motion.p>
                    </motion.div>

                    {/* LINKS */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full max-w-md mt-8"
                    >
                        {links.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={
                                    link.href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                className="group flex items-center py-5 px-2 -mx-2 border-t border-black/10 hover:bg-black/[0.02] transition-colors"
                            >
                                <div className="w-10 shrink-0">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.icon}
                                    </motion.div>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <p className="font-seven text-[0.65em] text-black/70 group-hover:text-black">
                                        {link.name}
                                    </p>

                                    <p className="font-seven text-[0.6em] text-black/30 mt-0.5">
                                        {link.username}
                                    </p>
                                </div>

                                <GoArrowUpRight
                                    size={14}
                                    className="text-black/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 70,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative h-[320px] md:h-screen overflow-hidden flex items-end justify-center md:justify-end"
                >
                    <motion.img
                        src={image}
                        alt=""
                        initial={{ scale: 0.96 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                        className="absolute bottom-0 h-[55vh] md:h-[90vh] w-auto max-w-none"
                    />
                </motion.div>
            </div>

            {/* FOOTER */}
            <motion.footer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className="border-t border-black/10 py-6 font-seven"
            >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    {/* LEFT */}
                    <div className="flex items-center gap-3">
                        <p className="font-six font-bold text-lg">
                            K.
                        </p>

                        <div className="w-px h-4 bg-black/10"></div>

                        <p className="text-[0.65em] text-black/40">
                            Full-Stack Product Developer
                        </p>
                    </div>

                    {/* NAV */}
                    <div className="flex gap-5 text-[0.65em] text-black/50">
                        <a
                            href="#home"
                            className="hover:text-black transition-colors"
                        >
                            Home
                        </a>

                        <a
                            href="#projects"
                            className="hover:text-black transition-colors"
                        >
                            Projects
                        </a>

                        <a
                            href="#about"
                            className="hover:text-black transition-colors"
                        >
                            About
                        </a>

                        <a
                            href="#contact"
                            className="hover:text-black transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* SOCIALS + COPYRIGHT */}
                    <div className="flex items-center gap-4">

                        <a
                            href="https://x.com/0x__Kenny"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black/50 hover:text-black transition-colors"
                        >
                            <FaXTwitter size={14} />
                        </a>

                        <a
                            href="https://github.com/lowkeydev01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black/50 hover:text-black transition-colors"
                        >
                            <FaGithub size={14} />
                        </a>

                        <a
                            href="https://t.me/0x__Kenny"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black/50 hover:text-black transition-colors"
                        >
                            <FaTelegram size={14} />
                        </a>

                        <div className="w-px h-4 bg-black/10"></div>

                        <p className="text-[0.6em] text-black/30">
                            © 2026 Ken
                        </p>

                    </div>
                </div>
            </motion.footer>
        </div>
    );
}