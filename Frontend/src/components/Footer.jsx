const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 px-6 md:px-20">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            Food<span className="text-white">Express</span>
          </h1>
          <p className="text-sm leading-6">
            Delivering happiness to your doorstep.  
            Fresh food, fast delivery, and unbeatable taste —  
            only at <span className="text-orange-500 font-semibold">FoodExpress</span>.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-orange-500 text-xl transition">🌐</a>
            <a href="#" className="hover:text-orange-500 text-xl transition">📘</a>
            <a href="#" className="hover:text-orange-500 text-xl transition">📸</a>
            <a href="#" className="hover:text-orange-500 text-xl transition">🐦</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-orange-500 transition" href="/">Home</a></li>
            <li><a className="hover:text-orange-500 transition" href="/menu">Menu</a></li>
            <li><a className="hover:text-orange-500 transition" href="/orders">My Orders</a></li>
            <li><a className="hover:text-orange-500 transition" href="/contact">Contact Us</a></li>
            <li><a className="hover:text-orange-500 transition" href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>

          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-orange-500 transition" href="#">FAQ</a></li>
            <li><a className="hover:text-orange-500 transition" href="#">Help Center</a></li>
            <li><a className="hover:text-orange-500 transition" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-orange-500 transition" href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to get offers, discounts, and new item updates.
          </p>

          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 px-4 py-3 w-full text-gray-300 outline-none"
            />
            <button className="bg-orange-600 px-5 py-3 text-white hover:bg-orange-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FoodExpress — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
