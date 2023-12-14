import { NavLink } from "react-router-dom";





const Navbar = () => {


    return (
        <div>
            <nav className="flex justify-between items-center fixed w-full py-10 px-28 text-white bg-black ">
                <h2 className="text-3xl font-extrabold dark:text-white">Husneara.</h2>
                <ul className="flex gap-5 flex-col md:flex-row font-semibold dark:text-white">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#085981] " : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#085981] " : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/education"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#085981] " : ""
                            }
                        >
                            Education
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#085981]  " : ""
                            }
                        >
                            Skills
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#085981]  " : ""
                            }
                        >
                            Projects
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#085981] " : ""
                            }
                        >
                            contact
                        </NavLink>
                    </li>
                </ul>  
            </nav>
        </div>
    );
};

export default Navbar;