import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopupMenu = ({ type, closePopup, handleImageChange }) => {
  const [productList, setProductList] = useState([]);
  const [optionProduct, setOptionProduct] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Product`);
        setProductList(response.data);
        setOptionProduct(type);
        console.log("Data:", response.data);
        console.log("Type:", type);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [type]);

  const handleImageClick = (imageSrc, typeImage, idProduct, price) => {
    console.log("Kiem tra gia: ", price);
    handleImageChange(imageSrc, typeImage, idProduct, price); 
    closePopup(); 
  };

  const handleCancle = () => {
    closePopup(); 
  };

  return (
    <section onClick={handleCancle} className="main-content popup">
      <section className="popup-container popup-gallery">
        {optionProduct === "BX" ? (
          productList
            .filter((product) => product.id.toString().startsWith("BX"))
            .map((product) => (
              <figure key={product.id}>
                <img
                  className='image-popup'
                  src={product.image}
                  alt={product.description}
                  onClick={() => handleImageClick(product.image, type, product.id, product.price)}
                />
                <figcaption>{product.price} VND</figcaption>
              </figure>
            ))
        ) : optionProduct === "FL" ? (
          productList
            .filter((product) => product.id.toString().startsWith("FL"))
            .map((product) => (
              <figure key={product.id}>
                <img
                  className='image-popup'
                  src={product.image}
                  alt={product.description}
                  onClick={() => handleImageClick(product.image, type, product.id, product.price)}
                />
                <figcaption>{product.price} VND</figcaption>
              </figure>
            ))
        ) : (
          productList
            .filter((product) => !product.id.toString().startsWith("BX") && !product.id.toString().startsWith("FL"))
            .map((product) => (
              <figure key={product.id}>
                <img
                  className='image-popup'
                  src={product.image}
                  alt={product.description}
                  onClick={() => handleImageClick(product.image, type, product.id, product.price)}
                />
                <figcaption>{product.price} VND</figcaption>
              </figure>
            ))
        )}
      </section>
    </section>
  );
};

export default PopupMenu;
