// Footer.js
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="items-center justify-between px-10 py-8 bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="grid grid-cols-1 space-y-4">
          <button className="w-56 h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded text-lg">
            Find your cleaner
          </button>

          <button className="w-56 h-10 bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-2 border border-blue-500 rounded text-lg">
            Register as a cleaner
          </button>
        </div>

        <div>
          <p>Cards we accept</p>
          <img src="/images/cards.jpg" alt="Visa" className='w-32' loading="lazy"></img>
        </div>


        <div className=''>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-600"><FaFacebook size={24} /></a></li>
            <li><a href="#" className="hover:text-blue-100"><FaTwitter size={24} /></a></li>
            <li><a href="#" className="hover:text-blue-100"><FaLinkedinIn size={24} /></a></li>
            <li><a href="#" className="hover:text-blue-100"><FaInstagram size={24} /></a></li>
          </ul>

          <div className='mt-20'>
            <ul className="list-none flex space-x-4">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Ebenezer Cleaning Services - Toronto. All rights reserved.</p>
      </div>
    </footer>

  );
};

export default Footer;
