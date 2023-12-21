import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Skills = () => {


    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className="bg-[#0f2c44]">
            <div className="max-w-6xl mx-auto py-10 px-3 md:py-10 md:px-6 lg:py-20 lg:px-0 ">
                <div className="text-center my-10 space-y-2">
                    <h2 className="md:text-5xl text-2xl text-white font-extrabold text-center"  data-aos="zoom-in">My <span className="md:text-5xl text-2xl text-[#01a1e5] font-extrabold"  data-aos="zoom-in">Skills</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="lg:my-2 " data-aos="fade-down">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE]">HTML</span>
                            <span className="font-bold text-[#E2E3CE]">92%</span>
                        </div>
                        <progress className="progress progress-accent border-2 border-[#01a1e5] my-2" value="92" max="100"></progress>
                    </div>
                    <div className="lg:my-2 " data-aos="fade-down">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE]">React</span>
                            <span className="font-bold text-[#E2E3CE]">72%</span>
                        </div>
                        <progress className="progress progress-accent border-2 border-[#01a1e5] my-2" value="72" max="100"></progress>
                    </div>
                    <div className="lg:my-2 " data-aos="fade-down">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE]">CSS</span>
                            <span className="font-bold text-[#E2E3CE]">90%</span>
                        </div>
                        <progress className="progress progress-accent border-2 border-[#01a1e5] my-2" value="90" max="100"></progress>
                    </div>
                    <div className="lg:my-2 " data-aos="fade-down">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE]">Node.js</span>
                            <span className="font-bold text-[#E2E3CE]">50%</span>
                        </div>
                        <progress className="progress progress-accent border-2 border-[#01a1e5] my-2" value="50" max="100"></progress>
                    </div>
                    <div className="lg:my-2 " data-aos="fade-down">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE]">Tailwind</span>
                            <span className="font-bold text-[#E2E3CE]">85%</span>
                        </div>
                        <progress className="progress progress-accent border-2 border-[#01a1e5] my-2" value="85" max="100"></progress>
                    </div>
                    <div className="lg:my-2 " data-aos="fade-down">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE]">Express.js</span>
                            <span className="font-bold text-[#E2E3CE]">59%</span>
                        </div>
                        <progress className="progress progress-accent border-2 border-[#01a1e5] my-2" value="59" max="100"></progress>
                    </div>
                    <div className="lg:my-2 " data-aos="fade-down">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE]">JavaScript</span>
                            <span className="font-bold text-[#E2E3CE]">70%</span>
                        </div>
                        <progress className="progress progress-accent border-2 border-[#01a1e5] my-2" value="70" max="100"></progress>
                    </div>
                    <div className="lg:my-2 " data-aos="fade-down">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE]">MongoDB</span>
                            <span className="font-bold text-[#E2E3CE]">63%</span>
                        </div>
                        <progress className="progress progress-accent border-2 border-[#01a1e5] my-2" value="63" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;