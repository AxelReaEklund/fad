import BackButton from "../components/BackButton.jsx";
import Waste from "../components/Waste.jsx";

function BinContent() {

    return (
        <div className="border border-blue-500
        flex items-center justify-center h-screen
        ">
            <BackButton to="/" />
            <div className="border border-red-500 bg-white
            w-[75vw] h-[75vh]">
                <Waste name="WASTE-001"/>
            </div>
        </div>
    );
}

export default BinContent;
