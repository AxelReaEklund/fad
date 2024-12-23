import BackButton from "../components/BackButton";
import useArtistAlbums from "../hooks/useAlbumDetails.jsx";




function Portfolio() {
    const { artistAlbums, error } = useArtistAlbums("7FF9hZa0wy3nwZyfz1F8Bn", "US", "album,single");
    if (error) {
        console.log(error);
    } else {
        console.log(artistAlbums);
    }

    return (
        <div className="flex flex-col min-h-screen relative">
            <BackButton to="/" />
            <h2 className="text-4xl font-bold mb-4 mt-16 text-center text-textPrimary tracking-widest">
                PORTFOLIO
            </h2>

            {/* Desktop */}
            <div className="hidden lg:block relative top-10 mx-auto w-[75vw] h-[75vh]">
                <div className="relative w-full h-full">
                    <ul
                        className="flex gap-96 overflow-x-auto scrollbar-hide z-10 relative pt-28"
                    >
                        {artistAlbums.map((album) => (
                            <li
                                key={album.id}
                                className="flex-shrink-0"
                            >
                                <a
                                    href={album.spotifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={album.coverImage}
                                        alt={album.name}
                                        className="w-96 h-96 object-cover rounded-lg"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Fading Edges */}
                    <div className="absolute top-0 left-0 w-72 h-full bg-gradient-to-r from-black/100 via-black/50 to-transparent pointer-events-none z-20"></div>
                    <div className="absolute top-0 right-0 w-72 h-full bg-gradient-to-l from-black/100 via-black/50 to-transparent pointer-events-none z-20"></div>
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
