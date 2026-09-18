import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(){
    return(
        <div className="w-full fixed backdrop-blur-xs bg-gray-50 top-0 grid grid-cols-2">
            <div className="flex justify-start py-3 items-center">
                <p className="font-bold md:text-3xl font-six text-3xl pl-3 md:pl-10">K.</p>
            </div>
            <div className="flex justify-end font-seven gap-12 md:pr-20 font- items-center">
                <a href="#" className="hidden md:block text-xs opacity-100 border border-transparent border-b-black py-1.5">Home</a>
                <a href="#" className="hidden md:block text-xs opacity-70 border border-transparent hover:border-b-black duration-300 py-1.5">About</a>
                <a href="#" className="hidden md:block text-xs opacity-70 border border-transparent hover:border-b-black duration-300 py-1.5">Projects</a>
                <a href="#" className="hidden md:block text-xs opacity-70 border border-transparent hover:border-b-black duration-300 py-1.5">Contact</a>
                <GiHamburgerMenu className="md:hidden text-3xl mr-2" />
            </div>
        </div>
    )
}