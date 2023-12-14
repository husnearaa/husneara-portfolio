import Banner from "../../components/Banner/Banner";
// import Navbar from "../../components/Shared/Navbar/Navbar";
import About from "../About/About";
import Skills from "../Skills/Skills";




const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;