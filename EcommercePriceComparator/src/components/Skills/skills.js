import React, { useState } from "react";
import "./skills.css";
import response from "../Response";

const Skills = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleButtonClick = (category) => {
    // Check if the clicked category is already selected
    if (category === selectedCategory) {
      // If it is, hide the products by setting an empty array
      setProducts([]);
      // Clear the selected category
      setSelectedCategory(null);
    } else {
      // Filter the data based on the clicked category
      const filteredProducts = response.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      // Update the products state with filtered data
      setProducts(filteredProducts);
      // Set the selected category
      setSelectedCategory(category);
    }
  };

  return (
    <section id="skills">
      <span className="skillTitle">Our Products</span>
      <span className="skillDesc">
        Explore our range of products designed to meet your needs and enhance
        your experience in the digital world.
      </span>
      <div className="skillButtons">
        <button onClick={() => handleButtonClick("laptops")}>Laptops</button>
        <button onClick={() => handleButtonClick("mobiles")}>Mobiles</button>
        <button onClick={() => handleButtonClick("sports")}>Sports</button>
        <button onClick={() => handleButtonClick("electronics")}>
          Electronics
        </button>
      </div>
      <div className="productList">
        {products.map((product, index) => (
          <div key={index} className="productItem">
            <img src={product.link} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            {/* Check if the product has ecommerce information */}
            {product.ecommerce && (
              <div className="ecommerceInfo">
                <p>Sold on: {product.ecommerce.name}</p>
                <img
                  src={product.ecommerce.image}
                  alt={product.ecommerce.name}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
