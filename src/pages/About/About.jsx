

const About = () => {
    return (
        <div className=" h-screen w-full bg-[#0f2c44] pb-10">
            <h2 className="md:text-5xl text-2xl text-white font-extrabold md:pt-11 py-10 text-center">About <span className="md:text-5xl text-2xl text-[#01a1e5] font-extrabold">Me</span></h2>
            <div className="flex flex-col items-center gap-10 justify-between px-28
            md:flex-row text-white">
                <div className="w-1/2 ">
                    <img
                    className="rounded-xl"
                     src={"https://i.postimg.cc/XYcLfprV/IMG-20200313-114257-fotor-bg-remover-20231214154455.png"} alt="" />
                </div>
                <div className="w-1/2">
                    <h3 className="md:text-3xl text-xl font-semibold text-white">Frontend Developer</h3>
                    <p className="pt-3 md:text-base text-sm text-white">I am a front-end web developer.I can provide clean code and pixel
                        perfect design.I also make the website more & more interactive with web
                        animations.A responsive design makes your website accessible to all users,
                        regardless of their device.
                    </p>
                    <button className="border-[#01a1e5] border-2 rounded-md py-2 px-3 text-[#081b29]
                             bg-[#01a1e5] hover:bg-[#081b29] hover:text-[#01a1e5] mt-5 md:mt-10">
                        <a href="https://www.linkedin.com/in/hosneara-popy-911abb136/" target="_blank" rel="noreferrer">Read More</a> 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;