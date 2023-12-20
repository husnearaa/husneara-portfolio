import Banner from "../../components/Banner/Banner";
// import Navbar from "../../components/Shared/Navbar/Navbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";




const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;