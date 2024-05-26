import React, { useState } from 'react';
import axios from 'axios';
import exitButton from '../assets/images/exit.png';
import addBox from '../assets/images/add-box.jpg';
import drinkAdd from '../assets/images/drink.jpg';
import flowerDrink from '../assets/images/flower.png';
import PopupMenu from './PopupMenu';
import OrderPay from './OrderPay';

const Buy = () => {
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [addBoxButton, setAddBoxButton] = useState('');
  const [addDrinkButton, setAddDrinkButton] = useState('');
  const [addFlowerButton, setAddFlowerButton] = useState('');
  const [boxId, setBoxId] = useState('');
  const [boxPrice, setBoxPrice] = useState(0);
  const [drinkId, setDrinkId] = useState('');
  const [drinkPrice, setDrinkPrice] = useState(0);
  const [flowerId, setFlowerId] = useState('');
  const [FlowerPrice, setFlowerPrice] = useState(0);
  const [orderId, setOrderId] = useState(0);
  const [note, setNote] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [orderButton, setOrderButton] = useState(false);
  const [isType, setType] = useState('CK');
  const [isAddressEmpty, setIsAddressEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);

  const createOrder = async () => {

    if (!address) {
      setIsAddressEmpty(true);
      return;
    } else {
      setIsAddressEmpty(false);
    }
  
    if (!phone) {
      setIsPhoneEmpty(true);
      return;
    } else {
      setIsPhoneEmpty(false);
    }
  

    const orderInformation = {
      date: "2024-05-18", 
      status: "pending", 
      address: address, 
      price: boxPrice + drinkPrice + FlowerPrice
    };
  
    try {
      const response = await axios.post("http://localhost:8080/Order", orderInformation);
      console.log("Data order:", response.data);
      setOrderId(response.data.orderId);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const orderInformation = {
    boxId: boxId,
    drinkId: drinkId,
    flowerId: flowerId,
    orderId:orderId,
    note: note,
    address: address,
    phone: phone,
    date: "2024-05-18",
    price: boxPrice + drinkPrice + FlowerPrice,
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleClickExit = () => {
    window.location.href = '/';
  };

  const handlePopup = (type) => {
    setType(type);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const closePayment = () => {
    setOrderButton(false);
  };

  const handleImageChange = (imageSrc, typeImage, idProduct, price) => {
    if (typeImage === 'BX') {
      setAddBoxButton(imageSrc);
      setBoxPrice(price);
      setBoxId(idProduct);
    } else if (typeImage === 'DK') {
      setAddDrinkButton(imageSrc);
      setDrinkPrice(price);
      setDrinkId(idProduct);
    } else {
      setAddFlowerButton(imageSrc);
      setFlowerPrice(price);
      setFlowerId(idProduct);
    }
    setSelectedImageSrc(imageSrc);
    setPopupVisible(false); 
  };

  const handleOrder = () => {
    let valid = true;
    if (!address) {
      setIsAddressEmpty(true);
      valid = false;
    } else {
      setIsAddressEmpty(false);
    }

    if (!phone) {
      setIsPhoneEmpty(true);
      valid = false;
    } else {
      setIsPhoneEmpty(false);
    }

    if (valid) {
      setOrderButton(true);
    }
    createOrder();
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const onlyDigits = value.replace(/\D/g, ''); 
    if (onlyDigits.length <= 10) {
      setPhone(onlyDigits); 
    }
  };

  return (
    <React.Fragment>
      <section className="custom-content">
        <img onClick={handleClickExit} className="exit-button" src={exitButton} alt="Exit" />
        <div className="custom-area">
          <div className="addbox-area">
            {addBoxButton ? (
              <img onClick={() => handlePopup('BX')} src={addBoxButton} alt="Selected Box" />
            ) : (
              <img onClick={() => handlePopup('BX')} src={addBox} alt="Add Box" />
            )}
          </div>
          <div className="content-area">
            {addDrinkButton ? (
              <img onClick={() => handlePopup('DK')} src={addDrinkButton} alt="Selected Drink" />
            ) : (
              <img onClick={() => handlePopup('DK')} src={drinkAdd} alt="Add Drink" />
            )}

            {addFlowerButton ? (
              <img onClick={() => handlePopup('FL')} src={addFlowerButton} alt="Selected Flower" />
            ) : (
              <img onClick={() => handlePopup('FL')} src={flowerDrink} alt="Add Flower" />
            )}
          </div>
          <div className={`note ${isInputFocused ? 'input-focused' : ''}`}>
            <h1 style={{marginBottom:"10px"}}>Total: {boxPrice + drinkPrice + FlowerPrice} VND</h1>
            <textarea
              placeholder="Ghi chú"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <textarea
              placeholder="Địa chỉ"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={isAddressEmpty ? 'input-error' : ''}
              required
            />
            <input
              placeholder="Số điện thoại"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={phone}
              onChange={handlePhoneChange}
              className={isPhoneEmpty ? 'input-error' : ''}
              required
            />
            <button onClick={handleOrder}>
              Order
            </button>
          </div>
        </div>
        {isPopupVisible && (
          <PopupMenu type={isType} closePopup={closePopup} handleImageChange={handleImageChange} />
        )}
        {orderButton && (
          <OrderPay closePayment={closePayment} orderDetail={orderInformation}></OrderPay>
        )}
      </section>
    </React.Fragment>
  );
};

export default Buy;
