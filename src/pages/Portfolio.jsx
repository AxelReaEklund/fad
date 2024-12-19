import BackButton from "../components/BackButton";


function Portfolio() {
    return (
        <div className="flex flex-col min-h-screen relative">

            {/* Back Icon */}
            <BackButton to="/" />

            {/* Header */}
            <h2 className="text-4xl font-bold mb-4 mt-16 text-center text-textPrimary tracking-widest">PORTFOLIO</h2>

            {/* Mobile version */}


        </div>
    );
}

export default Portfolio;
