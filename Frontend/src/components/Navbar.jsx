import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const FOOD_SUGGESTIONS = [
  "Chicken Biryani",
  "Veg Pizza",
  "Cold Coffee",
  "Masala Dosa",
  "Chicken Shawarma",
  "Veg",
  "Nonveg",
  "Burger",
  "Paneer Butter Masala",
  "Noodles",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Load user
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    setUser(savedUser ? JSON.parse(savedUser) : null);
  }, []);

  const params = new URLSearchParams(location.search);
  const [search, setSearch] = useState(params.get("q") || "");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    setSuggestions(
      FOOD_SUGGESTIONS.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5)
    );
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/?q=${search}`);
    setSuggestions([]);
  };

  const handleSuggestionClick = (value) => {
    setSearch(value);
    navigate(`/?q=${value}`);
    setSuggestions([]);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-3">

            {/* LOGO */}
            <Link to="/" className="text-2xl font-bold text-orange-600">
              Food<span className="text-black">Express</span>
            </Link>

            {/* SEARCH */}
            <div className="relative flex-1 max-w-lg mx-2">
              <form onSubmit={handleSearchSubmit}>
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search food..."
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-3 py-2 border rounded-full text-sm focus:ring-2 focus:ring-orange-500"
                />
              </form>

              {suggestions.length > 0 && (
                <div className="absolute w-full bg-white border rounded-lg shadow mt-1">
                  {suggestions.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => handleSuggestionClick(item)}
                      className="px-4 py-2 cursor-pointer hover:bg-orange-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex items-center gap-4">

              {/* DESKTOP MENU */}
              <div className="hidden md:flex items-center gap-4">

                {/* HOME - ALWAYS */}
                <Link to="/" className="font-medium hover:text-orange-600">
                  Home
                </Link>

                {user ? (
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className="font-semibold"
                  >
                    Hi, {user.name}
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-orange-600 text-white px-4 py-2 rounded"
                  >
                    Login
                  </Link>
                )}

                {/* DROPDOWN */}
                {dropdown && user && (
                  <div className="absolute right-0 top-12 w-40 bg-white shadow rounded">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* MOBILE TOGGLE */}
              <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
              >
                ☰
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="md:hidden mt-2 space-y-2 border-t pt-2">

              {/* HOME ALWAYS */}
              <Link to="/" className="block px-2 font-medium">
                Home
              </Link>

              {user ? (
                <>
                  <p className="font-semibold px-2">Hi, {user.name}</p>
                  <Link to="/profile" className="block px-2">Profile</Link>
                  <Link to="/orders" className="block px-2">My Orders</Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-2 text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="block px-2">Login</Link>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* SPACER */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
