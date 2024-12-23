// import { useState, useEffect } from "react";
//
// const fetchArtistAlbums = async (artistId, accessToken, market = "EU", includeGroups = "album,single") => {
//     const baseUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
//     let albums = [];
//     let nextUrl = `${baseUrl}?include_groups=${includeGroups}&market=${market}&limit=50`;
//
//     try {
//         while (nextUrl) {
//             const response = await fetch(nextUrl, {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//             });
//
//             if (!response.ok) {
//                 throw new Error(`Failed to fetch albums: ${response.status} ${response.statusText}`);
//             }
//
//             const data = await response.json();
//             albums = albums.concat(data.items);
//             nextUrl = data.next;
//         }
//
//         // Extract relevant details from the albums
//         const artistAlbums = albums.map((album) => ({
//             id: album.id,
//             name: album.name,
//             releaseDate: album.release_date,
//             totalTracks: album.total_tracks,
//             coverImage: album.images[0]?.url || null,
//             spotifyLink: album.external_urls.spotify,
//         }));
//
//         return artistAlbums;
//     } catch (error) {
//         console.error("Error fetching artist albums:", error.message);
//         throw error;
//     }
// };
//
// const useArtistAlbums = (artistId, accessToken, market, includeGroups) => {
//     const [artistAlbums, setArtistAlbums] = useState([]);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const albums = await fetchArtistAlbums(artistId, accessToken, market, includeGroups);
//                 setArtistAlbums(albums);
//             } catch (error) {
//                 setError(error);
//             }
//         };
//
//         fetchData();
//     }, [artistId, accessToken, market, includeGroups]);
//
//     return { artistAlbums, error };
// };
//
// export default useArtistAlbums;

import { useState, useEffect } from "react";

// Function to fetch the Spotify access token
const getSpotifyAccessToken = async () => {
    const clientId = "3d6a123aa3324b29b0a9a2c2c62198da"; // Replace with your Spotify client_id
    const clientSecret = "8b73ba51400d43d8b500897d5f2b21cb"; // Replace with your Spotify client_secret

    const authString = `${clientId}:${clientSecret}`;
    const authBase64 = btoa(authString); // Encode to Base64

    const url = "https://accounts.spotify.com/api/token";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Basic ${authBase64}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials",
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                `Error fetching access token: ${response.status} ${response.statusText} (${errorData.error_description})`
            );
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Failed to fetch Spotify access token:", error.message);
        throw error;
    }
};

// Function to fetch artist albums
const fetchArtistAlbums = async (artistId, market = "EU", includeGroups = "album,single") => {
    const baseUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    let albums = [];
    let nextUrl = `${baseUrl}?include_groups=${includeGroups}&market=${market}&limit=50`;

    try {
        // Fetch the Spotify access token
        const accessToken = await getSpotifyAccessToken();

        while (nextUrl) {
            const response = await fetch(nextUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch albums: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            albums = albums.concat(data.items);
            nextUrl = data.next;
        }

        // Extract relevant details from the albums
        const artistAlbums = albums.map((album) => ({
            id: album.id,
            name: album.name,
            releaseDate: album.release_date,
            totalTracks: album.total_tracks,
            coverImage: album.images[0]?.url || null,
            spotifyLink: album.external_urls.spotify,
        }));

        return artistAlbums;
    } catch (error) {
        console.error("Error fetching artist albums:", error.message);
        throw error;
    }
};

// Custom hook to fetch artist albums
const useArtistAlbums = (artistId, market, includeGroups) => {
    const [artistAlbums, setArtistAlbums] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const albums = await fetchArtistAlbums(artistId, market, includeGroups);
                setArtistAlbums(albums);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [artistId, market, includeGroups]);

    return { artistAlbums, error };
};

export default useArtistAlbums;
