

const About = () => {
    return (
        <div className="bg-[#0f2c44]">
            <div>
                <div className="max-w-6xl mx-auto py-10 px-3 md:py-10 md:px-6 lg:py-20 lg:px-0">
                    <div className="text-center my-10 space-y-2">
                        <h3 className="md:text-5xl text-2xl font-extrabold text-white ">About <span className="md:text-5xl text-2xl text-[#01a1e5] font-extrabold">Me</span></h3>
                        <p className="text-[#E2E3CE] font-medium"></p>
                    </div>
                    <div className="md:flex justify-between items-center">
                        <div className="md:w-1/2 flex flex-col md:mx-auto items-center justify-center space-y-5">
                            <div className="w-1/2 ">
                                <img
                                    className="rounded-xl"
                                    src={"https://i.postimg.cc/XYcLfprV/IMG-20200313-114257-fotor-bg-remover-20231214154455.png"} alt="" />
                            </div>
                        </div>
                        <div className="md:w-1/2  space-y-5">
                            <h3 className="text-white">hello</h3> 
                            <p className="text-justify items-center text-white md:text-base text-sm">
                                Hi, I'm Hosneara Parvin Popy , a detail-oriented Front-End Developer. I can provide clean code and pixel
                                perfect design. I also make the website more & more interactive with web
                                animations. A responsive design makes your website accessible to all users,
                                regardless of their device.
                            </p>
                            <button className="border-[#01a1e5] border-2 rounded-md py-2 px-3 text-[#081b29]
                             bg-[#01a1e5] hover:bg-[#081b29] hover:text-[#01a1e5] mt-5 md:mt-10">
                                <a href="https://www.linkedin.com/in/hosneara-popy-911abb136/" target="_blank" rel="noreferrer">Read More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;