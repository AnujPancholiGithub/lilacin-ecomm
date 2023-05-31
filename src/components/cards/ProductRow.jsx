import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./productrow.css";

const ProductRow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollableRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      rating: 4.5,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      rating: 3.8,
      imageUrl: "https://imgpile.com/images/9c4XsE.png",
    },

    // Add more products here
  ];

  const scrollToBottom = (Direction) => {
    if (scrollableRef.current) {
      const scrollableElement = scrollableRef.current;
      const items = scrollableElement.children;
      const itemHeight = items[0].offsetWidth;
      const nextScrollIndex = Math.min(scrollIndex + 1, items.length - 1);
      const scrollOffset = nextScrollIndex * itemHeight;

      const scrollToOptions = {
        behavior: "smooth",
      };

      if (Direction === "Next") {
        scrollToOptions.left = scrollOffset;
      } else {
        scrollToOptions.right = scrollOffset;
      }

      scrollableElement.scrollTo(scrollToOptions);
      setScrollIndex(nextScrollIndex);
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
    scrollToBottom("Prev");
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    scrollToBottom("Next");
  };

  return (
    <div style={{ background: "#e5e5e5" }}>
      <div className="product-row-container">
        <div className="product-row-handeler">
          <h1>Classified Products on the weeek</h1>
          <div className="product-row-handeler-buttongroup">
            <button
              className="nav-button prev-button"
              onClick={handlePrevClick}
            >
              <FaArrowLeft />
            </button>
            <button
              className="nav-button next-button"
              onClick={handleNextClick}
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="explore_class">
            <button>Explore</button>
          </div>
        </div>
        <div className="product-row">
          <div ref={scrollableRef} className="card-row">
            {products.map((product, index) => (
              <div
                key={index}
                className={`product-card ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-location">
                    <span className="icon">{/* <FaMapMarkerAlt /> */}</span>
                    {product.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <button
        onClick={() => {
          scrollToBottom();
        }}
      >
        Scroll to Next Item
      </button> */}
    </div>
  );
};

export default ProductRow;
