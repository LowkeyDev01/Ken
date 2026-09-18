import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";

import onchainLabs from "../assets/OnChainLabs.png";
import mydoc from "../assets/mydoc.png";
import roku from "../assets/roku.png";
import orangu from "../assets/orangu.png";

export default function Project() {
    const projects = [
        {
            image: onchainLabs,
            genre: "Web3 / Community",
            title: "OnChain Labs",
            subtext:
                "A minimalist community site for Web3 builders, projects and developers.",
            link: "https://theonchainlabs.xyz",
        },
        {
            image: mydoc,
            genre: "Health / Mobile (Coming Soon)",
            title: "My Doc",
            subtext:
                "A health app that connects users with trusted pharmacists for real guidance and support.",
            link: "https://bit.ly/mydocwaitlist",
        },
        {
            image: roku,
            genre: "NFT / Web3",
            title: "Roku",
            subtext:
                "An NFT project with a strong community and creative brand identity.",
            link: "https://x.com/0x__Kenny/status/2093265110718406879?s=20",
        },
        {
            image: orangu,
            genre: "NFT / Web3",
            title: "Orangu",
            subtext:
                "An NFT with a unique story, strong community and a clean, minimal design.",
            link: "https://x.com/0x__Kenny/status/2094367801595015456?s=20",
        },
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 80,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <div
            id="projects"
            className="w-full scroll-mt-20 bg-gray-50 md:pl-20 px-5 md:px-25 min-h-screen"
        >
            {/* SECTION LABEL */}
            <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
                className="flex pt-20 items-center text-black/50 font-seven text-[0.7em] gap-2"
            >
                <p>03</p>

                <div className="w-16 h-[0.05em] bg-black/50"></div>

                <p>PROJECTS</p>
            </motion.div>

            {/* HEADING */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className="flex mt-4 flex-col"
            >
                <p className="-ml-1 text-[1.7em] md:text-[2.5em] tracking-tighter md:tracking-normal font-six font-bold">
                    some things i've
                </p>

                <div className="flex gap-1 items-center">
                    <p className="-ml-1 text-[1.7em] -mt-4 md:text-[2.5em] tracking-tighter md:tracking-normal font-six font-bold">
                        built (and others i'm building)
                    </p>

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: 0.35,
                            ease: "backOut",
                        }}
                        className="hidden md:block md:w-2 md:h-2 w-2 h-2 rounded-full bg-green-500 mt-4 md:mt-2"
                    ></motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className="font-seven text-sm mt-4 text-black/50"
                >
                    A mix of web3, web2 and product focused projects. Each one
                    <br className="hidden md:block" />
                    taught me something new.
                </motion.p>
            </motion.div>

            {/* PROJECT CARDS */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
                className="grid mt-10 grid-cols-1 lg:grid-cols-2 gap-4 pb-20"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        variants={cardVariants}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.section>
        </div>
    );
}