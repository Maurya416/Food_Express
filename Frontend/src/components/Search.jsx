import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const [results, setResults] = useState([]);

  // 👉 Dummy Data (replace with backend API response)
  const foodData = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 199,
      img: "https://i.ibb.co/4mHqcTf/p1.jpg",
    },
    {
      id: 2,
      name: "Cheese Burger",
      price: 149,
      img: "https://i.ibb.co/mGFc3Qq/burger1.jpg",
    },
    {
      id: 3,
      name: "Chicken Biryani",
      price: 249,
      img: "https://i.ibb.co/6nH07Wr/biryani1.jpg",
    },
    {
      id: 4,
      name: "Masala Dosa",
      price: 99,
      img: "https://i.ibb.co/tc7w9yfd/dosa1.jpg",
    },
  ];

  useEffect(() => {
    if (query) {
      const filtered = foodData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-6 pt-24">

      {/* PAGE HEADING */}
      <h2 className="text-2xl font-semibold text-orange-700 mb-6">
        Search Results for: <span className="text-black">"{query}"</span>
      </h2>

      {/* NO RESULTS FOUND */}
      {results.length === 0 && (
        <div className="text-center mt-20">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No items found 🥲
          </h3>
          <p className="text-gray-500">
            Try searching for something else like <b>pizza, dosa, biryani...</b>
          </p>
        </div>
      )}

      {/* RESULTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

        {results.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-36 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>

              <p className="text-orange-600 font-bold text-lg mt-1">
                ₹{food.price}
              </p>

              <button className="mt-3 w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Search;
