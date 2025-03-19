import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice"; // Redux action
import "./ProductList.css";
import CartItem from "./CartItem";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({}); // Track added items
  const dispatch = useDispatch(); // Redux dispatch

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18",
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Add to Redux cart
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true, // Track added plants
    }));
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <a href="/" onClick={(e) => onHomeClick(e)}>
              <div>
                <h3>Paradise Nursery</h3>
                <i>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div>
          <a href="#" onClick={() => setShowCart(false)}>Plants</a>
          <a href="#" onClick={() => setShowCart(true)}>
            <h1 className="cart">🛒</h1>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <p className="product-description">{plant.description}</p>
                    <p className="product-cost">{plant.cost}</p>
                    <button
                      className={`product-button ${addedToCart[plant.name] ? "added" : ""}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]} // Disable if already added
                    >
                      {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem />
      )}
    </div>
  );
}

export default ProductList;



