import ScrollToTop from "react-scroll-to-top";


const Footer = () => {


    return (
        <div className="text-center p-4 bg-[#081b29] text-neutral-content">
            <ScrollToTop  smooth top="500" color="#01a1e5"/>
            <p className="text-[#fffff8]" >Copyright by <span className="text-[#01a1e5] font-extrabold">Husneara</span> | © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;