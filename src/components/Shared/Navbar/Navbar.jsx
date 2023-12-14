import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";




const Navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <div>
            <nav className="flex justify-between items-center fixed w-full py-8 px-28 text-white bg-[#081b29] ">
                <h2 className="text-3xl font-extrabold dark:text-white">Husneara.</h2>
                <ul className="md:flex gap-5 hidden md:flex-row font-semibold dark:text-white">
                    <li className="cursor-pointer duration-200 hover:scale-105">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#01a1e5] " : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="cursor-pointer duration-200 hover:scale-105">
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#01a1e5] " : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="cursor-pointer duration-200 hover:scale-105">
                        <NavLink
                            to="/education"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#01a1e5] " : ""
                            }
                        >
                            Education
                        </NavLink>
                    </li>
                    <li className="cursor-pointer duration-200 hover:scale-105">
                        <NavLink
                            to="/skills"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#01a1e5]  " : ""
                            }
                        >
                            Skills
                        </NavLink>
                    </li>

                    <li className="cursor-pointer duration-200 hover:scale-105">
                        <NavLink
                            to="/projects"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#01a1e5]  " : ""
                            }
                        >
                            Projects
                        </NavLink>
                    </li>

                    <li className="cursor-pointer duration-200 hover:scale-105">
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#01a1e5]" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 md:hidden">
                  
                    {
                        nav ?
                         <FaTimes className="text-2xl" ></FaTimes>
                        :
                        <FaBars className="text-2xl"></FaBars>

                    }
                </div> 
               {
                nav && (
                   
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
                    bg-gradient-to-b from-[#081b29] to-[#112e42] text-base-300 font-semibold dark:text-white">
                        <li className="cursor-pointer duration-200 hover:scale-105">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#01a1e5]" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="cursor-pointer duration-200 hover:scale-105">
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#01a1e5]" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="cursor-pointer duration-200 hover:scale-105">
                            <NavLink
                                to="/education"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#01a1e5]" : ""
                                }
                            >
                                Education
                            </NavLink>
                        </li>
                        <li className="cursor-pointer duration-200 hover:scale-105">
                            <NavLink
                                to="/skills"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#01a1e5]" : ""
                                }
                            >
                                Skills
                            </NavLink>
                        </li>
    
                        <li className="cursor-pointer duration-200 hover:scale-105">
                            <NavLink
                                to="/projects"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#01a1e5]" : ""
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
    
                        <li className="cursor-pointer duration-200 hover:scale-105">
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#01a1e5]" : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul> 
                )
               }
            </nav>
        </div>
    );
};

export default Navbar;