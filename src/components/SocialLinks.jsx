function SocialLinks() {
    return (
        <footer className="text-center my-10">
            <p className="text-textPrimary text-sm">Follow me on:</p>
            <div className="flex justify-center space-x-6 mt-2">
                <a href="https://twitter.com/artist" target="_blank" className="text-gray-700 hover:text-blue-600">
                    Twitter
                </a>
                <a href="https://instagram.com/artist" target="_blank" className="text-gray-700 hover:text-pink-500">
                    Instagram
                </a>
                <a href="https://facebook.com/artist" target="_blank" className="text-gray-700 hover:text-blue-800">
                    Facebook
                </a>
            </div>
        </footer>
    );
}

export default SocialLinks;