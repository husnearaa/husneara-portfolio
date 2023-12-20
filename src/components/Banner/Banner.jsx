import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const Banner = () => {


    const [ text ] = useTypewriter({
        words: ['Frontend Developer','Comfortable with Backend','Enthusiastic Learner'],
        loop: {},
    })

    return (
        <div className="bg-[#081b29]">
            <div className="flex items-center justify-between max-w-6xl h-[100vh] mx-auto py-20">
                <div className="w-full text-center md:text-left md:w-7/12 text-white ">
                    <h2 className="md:text-5xl text-2xl font-extrabold">Hi, I'm Hosneara Popy</h2>
                    <h2 className="md:text-3xl font-bold text-xl text-[#01a1e5] mt-3">
                       <span> {text}</span>
                        <Cursor/>
                    </h2>
                    <p className="text-sm md:text-base font-medium text-white mt-3">
                        I work on web application using technology like html, <br /> tailwind CSS, React.js,
                        express and MongoDB.
                    </p>
                    <div className="flex gap-5 justify-center md:justify-normal mt-5">
                        <a href="/src/assets/Assignment-02.pdf" download="Resume" >
                            <button className="border-[#01a1e5] border-2 rounded-md py-2 px-3 text-[#081b29]
                                  bg-[#01a1e5] hover:bg-[#081b29] hover:scale-105 hover:text-[#01a1e5]">
                                Download Resume
                            </button>
                        </a>
                        <Link to={"/contact"}>
                            <button className=" border-[#01a1e5] border-2 rounded-md py-2 px-3 text-[#01a1e5]  hover:bg-[#01a1e5]
                               hover:text-[#081b29] hover:scale-105 ">
                                Let's Talk
                            </button>
                        </Link>
                    </div>
                    <div className="flex gap-5 md:pt-16 pt-5 justify-center md:justify-normal">
                        <a href="https://github.com/husnearaa" target="_blank" rel="noreferrer">
                            <FaGithub className="text-4xl text-[#01a1e5]"></FaGithub>
                        </a>
                        <a href="https://www.linkedin.com/in/hosneara-popy-911abb136/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="text-4xl text-[#01a1e5]"></FaLinkedin>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;