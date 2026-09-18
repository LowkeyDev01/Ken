
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems
                .map((item) => document.getElementById(item.id))
                .filter(Boolean);

            let current = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 150;

                if (window.scrollY >= sectionTop) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (id) => {
        setActiveSection(id);

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="w-full fixed z-50 backdrop-blur-xs bg-gray-50/80 top-0 grid grid-cols-2">
            <div className="flex justify-start py-3 items-center">
                <p className="font-bold md:text-3xl font-six text-3xl pl-3 md:pl-10">
                    K.
                </p>
            </div>

            <div className="flex justify-end font-seven gap-8 md:pr-20 items-center">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={`
                            hidden md:block
                            text-[0.7em]
                            border border-transparent
                            py-1.5
                            duration-300
                            ${
                                activeSection === item.id
                                    ? "opacity-100 border-b-black"
                                    : "opacity-70 hover:border-b-black"
                            }
                        `}
                    >
                        {item.name}
                    </button>
                ))}

                {/* <GiHamburgerMenu className="md:hidden text-3xl mr-2" /> */}
            </div>
        </div>
    );
}
