import React from "react";
//import './ContactUs.css'; // Optional for additional styling
import bgImg from "../assets/bgimg4.jpeg";

function ContactUs() {
    return (
        <div>
            {/* Thank You Section */}
            <div className="w-full py-32 bg-white text-center">
                <h1 className="text-5xl font-semibold text-black">
                    Thank you for using our website!
                </h1>
            </div>

            {/* Black Contact Us Section */}
            <div className="flex flex-col items-center justify-center px-4 py-8 text-black inter-regular">
                <h1 className="text-center mb-4 text-2xl">Contact Us</h1>
                <p className="text-center">Email: support@langflow.com</p>
                <p className="text-center">Phone: +1-800-LANGFLOW</p>
            </div>
        </div>
    );
}

export default ContactUs;
