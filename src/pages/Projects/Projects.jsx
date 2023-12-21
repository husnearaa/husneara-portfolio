import { TbPointFilled } from "react-icons/tb";
import { FaGlobe , FaGithub} from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Projects = () => {


    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="bg-[#0f2c44]">
            <div className="max-w-6xl mx-auto py-10 px-3 md:py-10 md:px-6 lg:py-20 lg:px-0 ">
                <div className="text-center my-10 space-y-2">
                    <h3 className="md:text-5xl text-2xl pb-5 font-extrabold text-white" data-aos="zoom-in">
                        Projects<span className="md:text-5xl text-2xl text-[#01a1e5] font-extrabold" data-aos="zoom-in">s</span>
                    </h3>
                </div>
                {/* project-1  */}
                <div className=" md:flex gap-6 space-y-6 md:space-y-0">
                    <div className="md:w-[30%] md:min-h-[400px] border-[#01a1e5] border-2 rounded-md ">
                        <div className="flex justify-center items-center h-full bg-[#0f2c44]"  data-aos="zoom-in">
                            <img className="hover:scale-105 transition-all" src={"https://i.postimg.cc/FsyNsLnj/ezy-fotor-bg-remover-20231220171856.png"} alt="" />
                        </div>
                    </div>
                    <div className="md:w-[70%] min-h-[400px] overflow-hidden" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                        <div className="flex text-[#01a1e5] items-center gap-2">
                            <h3 className="md:text-2xl text-lg font-mono" >
                                EzyStay - Hotel Booking Management
                            </h3>
                        </div>
                        <div className="ml-6">
                        <div className="mt-5">
                            <p className="text-white md:text-base text-sm">
                                This is a hotel booking web application. Here user can booking room, update booking date,
                                 cancel booking , review and check booking history.
                                  User can know the some common rules or their most asked qurey about reservation .
                                  User can read blogs to know about our hotel services.   
                                </p>
                        </div>
                        <div className="flex items-center gap-2 mt-5 ">
                            <TbPointFilled className="text-white"></TbPointFilled>
                            <p className="text-white font-mono"> A responsive and user-friendly interface for hotel booking.</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 ">
                        <TbPointFilled className="text-white"></TbPointFilled>
                            <p className="text-white font-mono"> Secure room bookings through user authentication.</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 ">
                        <TbPointFilled className="text-white"></TbPointFilled>
                            <p className="text-white font-mono"> Users empower booking modifications, cancellations and reviews.</p>
                        </div>
                        <div className="mt-4 flex-wrap flex gap-2">
                            <p className="text-white font-bold">Techologies: </p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#HTML</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#Tailwind CSS</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44] px-3 font-mono py-1 rounded-sm shadow">#JS</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#React</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#React Router</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#Firebase</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#Node</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#Express</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#MongoDB</p>
                        </div>
                        <div className="mt-5 flex gap-5">
                            <a href="https://hotel-horizon.web.app/" rel="noreferrer"  target="_blank">
                                <div className="flex font-semibold items-center gap-2 hover:text-white text-[#01a1e5] cursor-pointer transition-all">
                                    <FaGlobe></FaGlobe>
                                    <p>Live Site</p>
                                </div>
                            </a>
                            <a href="https://github.com/husnearaa/Ezystay-Client-Side-A11" rel="noreferrer"  target="_blank">
                                <div className="flex font-semibold items-center gap-2 hover:text-white text-[#01a1e5] cursor-pointer transition-all">
                                    <FaGithub></FaGithub>
                                    <path>Client Site</path>
                                </div>
                            </a>
                            <a href="https://github.com/husnearaa/Ezytay-Server-Side-A11" rel="noreferrer"  target="_blank">
                                <div className="flex font-semibold md:text-base text-sm items-center gap-2 hover:text-white text-[#01a1e5] cursor-pointer transition-all">
                                    <FaGithub></FaGithub>
                                    <p>Server Site</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* project-2  */}
                <div className=" md:flex gap-6 space-y-6 md:space-y-0 mt-10">
                    <div className="md:w-[30%] md:min-h-[400px] border-[#01a1e5] border-2 rounded-md ">
                        <div className="flex justify-center items-center h-full bg-[#0f2c44]" data-aos="zoom-in">
                            <img className="hover:scale-105 transition-all" src={"https://i.postimg.cc/Nj0NKhjQ/beut-fotor-bg-remover-20231220173051.png"} alt="" />
                        </div>
                    </div>
                    <div className="md:w-[70%] min-h-[400px] overflow-hidden" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                        <div className="flex text-[#01a1e5] items-center gap-2">
                            <h3 className="md:text-2xl text-lg  font-mono">
                            Beauty World - E-commerce                                 
                            </h3>
                        </div>
                        <div className="ml-6">
                        <div className="mt-5">
                            <p className="text-white md:text-base text-sm">
                            This is Beauty product shop e-commece web application.
                             It is a destination for high-quality cosmetics. 
                             Discover a diverse range of skincare, makeup, 
                             and fragrances from iconic brands such as L'Oréal, 
                             Estée Lauder, Chanel, Dior, Urban Decay, and Revlon.
                              Elevate your beauty regimen with our carefully curated selection of products  
                                </p>
                        </div>
                        <div className="flex items-center gap-2 mt-5 ">
                            <TbPointFilled className="text-white"></TbPointFilled>
                            <p className="text-white font-mono"> A responsive and user-friendly e-commerce platform for buying beauty products.</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 ">
                        <TbPointFilled className="text-white"></TbPointFilled>
                            <p className="text-white font-mono"> User Authentication to view product details.</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 ">
                        <TbPointFilled className="text-white"></TbPointFilled>
                            <p className="text-white font-mono"> Users command swift control over product cancellation, updates, and reviews</p>
                        </div>
                        <div className="mt-4 flex-wrap flex gap-2">
                            <p className="text-white font-bold">Techologies: </p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#HTML</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#Tailwind CSS</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44] px-3 font-mono py-1 rounded-sm shadow">#JS</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#React</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#React Router</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#Firebase</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#Node</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#Express</p>
                            <p className="bg-[#01a1e5] text-[#0f2c44]  px-3 font-mono py-1 rounded-sm shadow">#MongoDB</p>
                        </div>
                        <div className="mt-5 flex gap-5">
                            <a href="https://capable-gumption-49438f.netlify.app/" rel="noreferrer"  target="_blank">
                                <div className="flex font-semibold items-center gap-2 hover:text-white text-[#01a1e5] cursor-pointer transition-all">
                                    <FaGlobe></FaGlobe>
                                    <p>Live Site</p>
                                </div>
                            </a>
                            <a href="https://github.com/husnearaa/Beauty-World-Client-A10" rel="noreferrer"  target="_blank">
                                <div className="flex font-semibold items-center gap-2 hover:text-white text-[#01a1e5] cursor-pointer transition-all">
                                    <FaGithub></FaGithub>
                                    <p>Client Site</p>
                                </div>
                            </a>
                            <a href="https://github.com/husnearaa/Beauty-World-Server-A10" rel="noreferrer"  target="_blank">
                                <div className="flex font-semibold items-center gap-2 hover:text-white text-[#01a1e5] cursor-pointer transition-all">
                                    <FaGithub></FaGithub>
                                    <p>Server Site</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;