import { FaGithub, FaLinkedin } from "react-icons/fa";


const Banner = () => {
    return (
        <div className=" h-screen w-full bg-[#081b29]">
            <div className="h-[100vh] mx-auto flex flex-col items-center justify-between pt-10 px-28
            md:flex-row text-white">
                <div className="mt-32">
                    <h2 className="md:text-5xl text-2xl font-extrabold">Hi, I'm Hosneara Popy</h2>
                    <p className="md:text-3xl text-xl font-extrabold text-[#01a1e5] mt-3">Frontend Developer</p>
                    <p className="mt-4">I work on web application using technology like html, tailwind CSS, <br /> React.js,
                        express and MongoDB.
                    </p>
                    <div className="flex gap-5">
                        <div>
                            <a href="/src/assets/Assignment-02.pdf" download="Resume">
                                <button className="border-[#01a1e5] border-2 rounded-md py-2 px-3 text-[#081b29]
                                  bg-[#01a1e5] hover:bg-[#081b29] hover:text-[#01a1e5] mt-5 md:mt-10">
                                    Download Resume
                                </button>
                            </a>
                        </div>
                        <div>
                            <button className=" border-[#01a1e5] border-2 rounded-md py-2 px-3 text-[#01a1e5]  hover:bg-[#01a1e5]
                               hover:text-[#081b29] md:mt-10 mt-5">
                                Let's Talk
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-5 pt-8 ">
                        <a href="https://github.com/husnearaa" target="_blank" rel="noreferrer"><FaGithub className="text-4xl text-[#01a1e5]"></FaGithub></a>
                        <a href="https://www.linkedin.com/in/hosneara-popy-911abb136/" target="_blank" rel="noreferrer"><FaLinkedin className="text-4xl text-[#01a1e5]"></FaLinkedin></a>
                    </div>
                </div>
                <div className="">
                    {/* <img className="mx-auto w-2/3 md:w-full" src={"https://i.postimg.cc/K8MncCDd/IMG-20200313-114257-fotor-bg-remover-2023121415510.png"} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;