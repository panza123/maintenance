import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 flex flex-col items-center justify-center py-10 mt-10">
      {/* Footer Heading */}
      <h1 className="text-white text-2xl font-semibold mb-10">Get in touch</h1>

      {/* Contact Information Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Location */}
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-blue-500 flex items-center justify-center">
            <FaLocationDot size={30} className="text-white" />
          </div>
          <p className="text-white mt-2">1234 Main St, City</p>
        </div>

        {/* Divider */}
        <div className="h-[100px] w-[1px] bg-white my-6 md:h-[1px] md:w-[200px]"></div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-blue-500 flex items-center justify-center">
            <FaPhone size={30} className="text-white" />
          </div>
          <p className="text-white mt-2">+1 234 567 890</p>
        </div>

        {/* Divider */}
        <div className="h-[100px] w-[1px] bg-white my-6 md:h-[1px] md:w-[200px]"></div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-blue-500 flex items-center justify-center">
            <CiMail size={30} className="text-white" />
          </div>
          <p className="text-white mt-2">info@example.com</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex flex-col items-center mt-10">
        <p className="text-white mb-2">Follow us</p>
        <div className="flex items-center justify-center w-40 h-12 bg-white rounded-full gap-4 p-2">
          <FaFacebook className="text-blue-500" />
          <FaTwitter className="text-blue-500" />
          <FaYoutube className="text-blue-500" />
          <FaInstagram className="text-blue-500" />
        </div>
      </div>

      {/* Footer Copyright */}
      <p className="text-white mt-10">
        Copyright © 2024 My Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;