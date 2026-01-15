import { useState } from "react";

const FoodCard = ({
  title,
  description,
  price,       // full price
  halfPrice,   // half price
  rating,
  discount,
  image,
  type,
  bestseller,
}) => {
  const [qty, setQty] = useState(0);
  const [size, setSize] = useState(halfPrice ? "full" : "full");

  // Price based on size selected
  const currentPrice = size === "full" ? price : halfPrice;

  // Total Price (fixed part)
  const totalPrice = qty * currentPrice;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col relative hover:-translate-y-1 duration-300">

      {/* Discount & Bestseller */}
      {discount && (
        <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {discount}% OFF
        </span>
      )}
      {bestseller && (
        <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
          ⭐ Bestseller
        </span>
      )}

      {/* Food Image */}
      <img src={image} alt={title} className="w-full h-44 object-cover rounded-xl" />

      <h2 className="text-lg font-semibold mt-3">{title}</h2>

      {/* Type + Rating */}
      <div className="flex items-center gap-2 mt-1">
        <span
          className={`w-3 h-3 rounded-full ${
            type === "veg" ? "bg-green-600" : "bg-red-600"
          }`}
        ></span>
        <p className="text-sm text-gray-600 flex items-center">⭐ {rating}</p>
      </div>

      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>

      {/* Half / Full Selector */}
      {halfPrice && (
        <div className="mt-3">
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-600"
          >
            <option value="full">Full - ₹{price}</option>
            <option value="half">Half - ₹{halfPrice}</option>
          </select>
        </div>
      )}

      {/* Price + Add-To-Cart */}
      <div className="flex justify-between items-center mt-4">

        {/* Dynamic total price */}
        <p className="text-orange-600 font-semibold text-xl">
          ₹{qty === 0 ? currentPrice : totalPrice}
        </p>

        {qty === 0 ? (
          <button
            onClick={() => setQty(1)}
            className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center bg-orange-600 text-white rounded-xl">
            <button
              onClick={() => setQty(qty - 1)}
              className="px-3 py-2 text-lg"
            >
              −
            </button>
            <span className="px-3 text-lg">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-2 text-lg"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
