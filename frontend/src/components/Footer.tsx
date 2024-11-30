import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-rose-500 mt-auto w-full p-6 text-center text-white">
      <div className="flex flex-col items-center gap-4">
        {/* Logo and branding */}
        <Link to="/" className="flex flex-col items-center">
          <img
            src="/images/santaclausremovebg.png"
            alt="Santa Claus Logo"
            className="h-12 mb-2"
          />
          <span className="text-2xl font-mountain tracking-wide">
            Christmas Shopping
          </span>
        </Link>

        {/* Divider */}
        <hr className="w-3/4 border-rose-300" />

        {/* Footer links */}
        <div className="flex gap-6 mt-4">
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Rights notice */}
        <span className="text-sm mt-4">
          © 2024{" "}
          <a href="/" className="font-semibold hover:underline">
            Christmas Shopping™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
