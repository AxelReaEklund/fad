import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import useArtistAlbums from "../hooks/useAlbumDetails.jsx";

function Portfolio() {
    const { artistAlbums, error } = useArtistAlbums("0du5cEVh5yTK9QJze8zA0C", "US", "album,single");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (artistAlbums.length > 0) {
            setIsLoading(false); // Data has been fetched
        }
    }, [artistAlbums]);

    if (error) {
        console.log(error);
    } else {
        console.log(artistAlbums);
    }

    return (
        <div className="flex flex-col min-h-screen relative bg-background">
            <BackButton to="/" />
            <h2 className="text-5xl font-bold mb-4 mt-16 text-center text-textPrimary tracking-widest ">
                PORTFOLIO
            </h2>

            {/* Desktop */}
            <div className="hidden lg:block relative top-10 mx-auto w-[75vw] h-[75vh]">
                <div className="relative w-full h-full">
                    <ul
                        className="flex gap-24 overflow-x-auto scrollbar-hide z-10 relative pt-28 px-44"
                    >
                        {isLoading
                            ? Array(10).fill(0).map((_, index) => (
                                <li
                                    key={index}
                                    className="flex-shrink-0 group relative overflow-visible"
                                >
                                    {/* Skeleton Placeholder */}
                                    <div
                                        className="w-96 h-96 bg-neutral-900 rounded-lg animate-pulse"
                                    ></div>
                                </li>
                            ))
                            : artistAlbums.map((album) => (
                                <li
                                    key={album.id}
                                    className="flex-shrink-0 group relative overflow-visible"
                                >
                                    <a
                                        href={album.spotifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block transform transition-transform duration-300 ease-in-out group-hover:-translate-y-16"
                                    >
                                        <img
                                            src={album.coverImage}
                                            alt={album.name}
                                            className="w-96 h-96 object-cover rounded-lg"
                                        />
                                    </a>
                                    {/* Hover Text */}
                                    <div
                                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2
                                          text-white text-center opacity-0 text-4xl font-sans
                                          group-hover:opacity-100 transition-opacity duration-300 ease-in-out py-2 px-4
                                          max-w-[36rem] truncate"
                                    >
                                        {album.name}
                                    </div>
                                </li>
                            ))}
                    </ul>

                    {/* Fading Edges */}
                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none z-20"></div>
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background via-background/50 to-transparent pointer-events-none z-20"></div>
                </div>
            </div>

            {/* Mobile */}
            <div className="block lg:hidden p-4">
                {/* Mobile-specific content */}
            </div>
        </div>
    );
}

export default Portfolio;
