import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Education = () => {


    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="bg-[#0f2c44]">
            <div className="max-w-6xl mx-auto py-10 px-3 md:py-10 md:px-6 lg:py-20 lg:px-0 ">
                <div className="text-center my-10 space-y-2">
                    <h3 className="md:text-5xl text-2xl font-extrabold text-white" data-aos="zoom-in">Educatio<span className="md:text-5xl text-2xl text-[#01a1e5] font-extrabold" data-aos="zoom-in">n</span>
                    </h3>
                </div>
                <div className="md:flex justify-between items-center gap-8">
                    <div className="md:w-1/2  md:text-justify text-center border-[#01a1e5] bg-[#081B29] shadow-2xl shadow-sky-500 border-2 rounded-md p-4 mt-4" data-aos="zoom-in" >
                        <h2 className="md:text-2xl font-bold text-lg text-white pb-8">B.Sc in Computer Science & Engineering</h2>
                        <h3 className="md:text-xl text lg text-[#01a1e5] font-semibold pb-1">Daffodil International University</h3>
                        <p className="md:text-justify text-center items-center text-white md:text-base text-sm">
                            2016-2020
                        </p>
                    </div>
                    <div className="md:w-1/2 md:text-justify text-center border-[#01a1e5] border-2  bg-[#081B29] shadow-2xl shadow-sky-500 rounded-md p-4 mt-4" data-aos="zoom-in">
                        <h2 className="md:text-2xl font-bold text-xl text-white pb-8">HSC in Science</h2>
                        <h3 className="md:text-xl text lg text-[#01a1e5] font-semibold pb-1">Govt. Akbar Ali College</h3>
                        <p className="md:text-justify text-center items-center text-white md:text-base text-sm">
                            2013-2015
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;