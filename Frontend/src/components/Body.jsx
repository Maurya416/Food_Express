import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FoodCard from "./FoodCard";

const FoodList = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  const foods = [
    {
      id: 1,
      title: "Chicken Biryani",
      description: "Authentic Hyderabadi biryani.",
      price: 180,
      halfPrice: 120,
      rating: 4.7,
      type: "nonveg",
      image: "/chiken.jpg",
    },
    {
      id: 2,
      title: "Veg Pizza",
      description: "Loaded with cheese and veggies.",
      price: 250,
      halfPrice: 150,
      rating: 4.6,
      type: "veg",
      image: "/pizza.jpg",
    },
    {
      id: 3,
      title: "Cold Coffee",
      description: "Iced creamy cold coffee.",
      price: 99,
      rating: 4.4,
      type: "veg",
      image: "/coffee.jpg",
    },
    {
      id: 4,
      title: "Masala Dosa",
      description: "Crispy South Indian dosa with aloo masala filling.",
      price: 120,
      rating: 4.3,
      discount: 15,
      type: "veg",
      image:"/masala_dosa.jpg",
    },
    {
      id: 5,
      title: "Chicken Shawarma",
      description: "Lebanese-style juicy chicken shawarma roll.",
      price: 149,
      rating: 4.8,
      type: "nonveg",
      bestseller: true,
      image:"/Chicken Shawarma.jpg",
    },
    {
      id: 6,
      title: "Bakingo Cake",
      description: "Fresh Cake with pure heart.",
      price: 100,
      rating: 5,
      type: "veg",
      bestseller: false,
      image:"/bakingo.avif",
    },
    {
      id: 7,
      title: "Burger",
      description: "Cheesy and tasty Burger",
      price: 80,
      rating: 4.9,
      type: "veg",
      bestseller: true,
      image:"/burger.jpg",
    },
    {
      id: 8,
      title: "Paneer Butter Masala",
      description: "Lebanese-style juicy Paneer Butter Masala.",
      price: 120,
      rating: 5,
      type: "veg",
      bestseller: false,
      image:"/Paneer.webp",
    },
    {
      id: 9,
      title: "Noodles",
      description: "Crispy Chines Noodles.",
      price: 90,
      rating: 4.8,
      type: "veg",
      bestseller: true,
      image:"/Noodles.jpg",
    },

  ];

  const [filteredFoods, setFilteredFoods] = useState(foods);

  // 🔍 SEARCH FILTER LOGIC
  useEffect(() => {
    if (!searchQuery) {
      setFilteredFoods(foods);
      return;
    }

    const filtered = foods.filter((food) =>
      food.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredFoods(filtered);
  }, [searchQuery]);

  return (
    <div className="pt-20 px-4 md:px-10 lg:px-20 bg-gray-50 min-h-screen">
      {searchQuery && (
        <h2 className="text-lg font-semibold mb-4">
          Search results for{" "}
          <span className="text-orange-600">"{searchQuery}"</span>
        </h2>
      )}

      {filteredFoods.length === 0 ? (
        <p className="text-gray-500 text-lg">No items found 😕</p>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Today's <span className="text-orange-600">Specials</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {filteredFoods.map((food) => (
              <FoodCard key={food.id} {...food} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FoodList;
