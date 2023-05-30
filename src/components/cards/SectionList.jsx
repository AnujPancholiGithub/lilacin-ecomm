import React from "react";
import "./sectionlist.css";

const SectionList = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9skGdG.png",
    },

    // Add more products here
  ];

  return (
    <>
      {/* <div>
        <h1>Best Deals</h1>{" "}
        <a>
          <p>View All</p>
        </a>
      </div> */}
      <div className="product-listing">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">Rating: {product.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionList;
