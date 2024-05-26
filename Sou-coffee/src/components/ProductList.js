import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QR from '../assets/images/QR.jpg';

const MenuList = ({ type }) => {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupPayment, setIsPopupPayment] = useState(false); 
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Product`);
        setProductList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsPopupOpen(true);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
    setIsPhoneValid(value.trim() !== ''); 
  };

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
    setIsAddressValid(value.trim() !== ''); 
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    
  };

  const createDrinkBill = async () => {
    console.log("Creating DrinkBill detail...");

    const DrinkBillInformation = {
      productId: selectedProduct.id,
      quantity: quantity,
      address: address,
      date:"2024-05-25",
      phone: phone,
      price: selectedProduct.price * quantity
    };

    console.log("DrinkBillInformation detail:", DrinkBillInformation);

    try {
      const response = await axios.post("http://localhost:8080/DrinkBill", DrinkBillInformation);
      console.log("Data:", response.data);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleSubmit = () => {
    if (!isPhoneValid || !isAddressValid) {
      alert("Please fill in all required fields (Phone and Address)."); 
      return;
    }
  
    console.log("Order submitted:", {
      product: selectedProduct,
      quantity,
      totalPrice: selectedProduct.price * quantity
    });
  
    setIsPopupPayment(true);
    handleClosePopup();
  };

  const handleSubmitPayment = () => {
    createDrinkBill();
    console.log("successfully paid");
   
    handleClosePopupPayment();
  };

  const handleClosePayment = () => {
    console.log("Close Payment");
 
    handleClosePopupPayment();
  };

  const handleClosePopupPayment = () => {
    setIsPopupPayment(false); 
    setSelectedProduct(null);
  };

  return (
    <div className="menu-list">
      {productList.length > 0 ? (
        productList
          .filter((product) => product.id.toString().startsWith(type))
          .map((product) => (
            <div className="menu-item" key={product.id}>
              <span className="item-name" onClick={() => handleProductClick(product)}>
                {product.name}
              </span>
              <span className="price">{product.price}</span>
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}

      {isPopupOpen && selectedProduct && (
        <div className="popup-menu">
          <div className="popup-menu-content">
            <button className="close-button" onClick={handleClosePopup}>✖</button>
            <div className="popup-left">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
            </div>
            <div className="popup-right">
              <h2>{selectedProduct.name}</h2>
              <label>
                Quantity:
                <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
              </label>
              <label>
                Phone:
                <input style={{ width: "300px", marginLeft: "23px" }} value={phone} onChange={handlePhoneChange} />
              </label>
              <label>
                Address:
                <input style={{ width: "300px" }} value={address} onChange={handleAddressChange} />
              </label>

              <p>Total Price: {selectedProduct.price * quantity} VND</p>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {isPopupPayment && selectedProduct && (
        <div className="popup-menu">
          <div className="popup-menu-content">
            <button className="close-button" onClick={handleClosePayment}>✖</button>
            <div className="popup-left">
              <img src={QR} alt="Selected Box" className="product-image" />
            </div>
            <div className="popup-right">
              <h1>Chuyển khoản thông qua mã QR</h1>
              <p>Số tiền: {selectedProduct.price * quantity}</p>
              <h2>Nội dung chuyển khoản: {selectedProduct.name}</h2>
              <button onClick={handleSubmitPayment}>Đã thanh toán</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuList;
