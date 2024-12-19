// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SocialLinks from "../components/SocialLinks";

function Home() {
    return (
        <div className="flex flex-col min-h-screen justify-between px-6 md:px-12 lg:px-24">
            <div className="flex items-center justify-center pt-20  lg:mt-20 mt-10">
                <Header />
            </div>
            <Navigation />
            <SocialLinks />
        </div>
    );
}

export default Home;


// function Home() {
//     return (
//         <div className="flex flex-col min-h-screen">
//             {/* Header & Navigation Section */}
//             <div className="flex flex-col items-center justify-between flex-grow w-full">
//                 <Header className="text-center mb-8 md:mb-16" />
//                 <Navigation className="w-full max-w-screen-md" />
//             </div>
//
//             {/* Social Links Section */}
//             <SocialLinks className="py-6" />
//         </div>
//     );
// }

// function Home() {
//     return (
//         <div className="grid min-h-screen grid-rows-[auto_1fr_auto] px-6 md:px-12 lg:px-24">
//             {/* Header at the Top with Padding */}
//             <div className="pt-[clamp(4rem, 10vh, 8rem)]">
//                 <Header />
//             </div>
//
//             {/* Navigation Centered */}
//             <div className="row-start-2 row-end-3 flex items-center justify-center">
//                 <Navigation className="w-full max-w-screen-md" />
//             </div>
//
//             {/* Social Links at the Bottom */}
//             <SocialLinks className="row-start-3 row-end-4 py-6" />
//         </div>
//     );
// }
//
// export default Home;
