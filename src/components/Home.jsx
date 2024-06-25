import Header from "./Header";
import Hero from "./Hero";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const Home = ({loading}) => {
    return (
        <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <Header />
            <Hero />
            <Contact />
            <Footer />
        </div>
    )

}

export default Home;