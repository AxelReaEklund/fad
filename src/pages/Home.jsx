import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SocialLinks from "../components/SocialLinks";

function Home() {
    return (
        <div className="flex flex-col min-h-screen justify-between px-6 md:px-12 lg:px-24">
            <div className="flex items-center justify-center pt-20  lg:mt-10 mt-15">
                <Header txt="FAD" />
            </div>
            <Navigation />
            <SocialLinks />
        </div>
    );
}

export default Home;

