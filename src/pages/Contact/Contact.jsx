import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {


    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className="bg-[#0f2c44]">
            <div className="max-w-6xl mx-auto py-10 px-3 md:py-10 md:px-6 lg:py-20 lg:px-0 ">
                <div className="text-center my-10 space-y-2">
                    <h3 className="md:text-5xl text-2xl font-extrabold text-white" data-aos="zoom-in">Contact <span className="md:text-5xl text-2xl text-[#01a1e5] font-extrabold" data-aos="zoom-in">Me</span></h3>
                    <p></p>
                </div>
                <div className="md:flex ">
                    <div className=" w-full md:w-1/2 p-[34px] flex items-center justify-center" data-aos="zoom-in" >
                        <div className="space-y-3">
                            <div>
                                <h3 className="text-white md:text-2xl text-lg font-semibold pb-3">Get in Touch</h3>
                                <p className="text-white pb-3 md:text-base text-sm">I'm enthusiastic about the prospect of contributing my skills to your team and aligning with its goals. 
                                Whether there's an exciting project on the horizon or a need for a proactive and dedicated team member, 
                                I'm eager to connect and explore potential opportunities together.
                                </p>
                            </div>
                            {/* <div className="flex items-center gap-2">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="text-3xl text-[#01a1e5] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"></path></svg>
                                <div>
                                    <h4 className="text-white md:font-base text-sm">Contact</h4>
                                    <p className="text-white md:font-base text-sm">00000000000</p>
                                </div>
                            </div> */}
                            <div className="flex items-center gap-2">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl text-[#01a1e5] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>
                                <div>
                                    <h4 className="text-white md:font-medium text-sm">Email</h4>
                                    <p className="text-white md:font-medium text-sm">hosnearapopy462@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="text-3xl text-[#01a1e5] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
                                <div>
                                    <h4 className="text-white md:font-medium text-sm">Address</h4>
                                    <p className="text-white md:font-medium text-sm">Rajshahi, Bangladesh</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full md:w-1/2 pt-15 bg-transparent"data-aos="zoom-in" >
                        <form className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg text-medium text-white">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered bg-[#081b29] text-white " required></input>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg text-medium text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered bg-[#081b29] text-white" required></input>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  md:text-lg text-medium text-white">Message</span>
                                </label>
                                <textarea className="bg-[#081b29]  text-white rounded-lg px-4 py-2" placeholder="Write Your Message Here" name="message" id="" cols="30" rows="5" required></textarea>
                            </div>
                            <div className="form-control mt-6" >
                                 <input type="submit" value="Send" className="btn border-[#01a1e5] border-2 rounded-md text-lg  text-[#081b29]
                             bg-[#01a1e5] hover:bg-[#081b29] hover:text-[#01a1e5]" /> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;