import axios from 'axios';
import React from 'react';
import exitButton from '../assets/images/exit.png';
import QR from '../assets/images/QR.jpg';

const PopupMenu = ({ closePayment, orderDetail }) => {

    const createOrderDetail = async () => {
        console.log("Creating order detail...");

        const orderInformation = {
            orderId: orderDetail.orderId,
            boxId: orderDetail.boxId,
            drinkId: orderDetail.drinkId,
            decorId: orderDetail.flowerId,
            note: orderDetail.note,
            phone: orderDetail.phone,
            price: orderDetail.price,
        };

        console.log("order detail:", orderInformation);

        try {
            const response = await axios.post("http://localhost:8080/OrderDetail", orderInformation);
            console.log("Data:", response.data);
        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    const deleteOrderDetail = async (id) => {
        try {
          const response = await axios.delete(`http://localhost:8080/Order/${id}`);
          console.log("Delete response:", response.data);
        } catch (error) {
          console.error("Error deleting order detail:", error);
        }
      };

    const handleImageClick = () => {
        console.log("THOAT KHOI ORDER");
        deleteOrderDetail(orderDetail.orderId);
        closePayment(); // Close the popup
    };

    const handleConfirmClick = () => {
        console.log("DA CHUYEN KHOAN ROI NHE");
        createOrderDetail();
        closePayment(); // Close the popup
    };

    return (
        <section className="payment-area">
            <img onClick={handleImageClick} className="exit-button" src={exitButton} alt="Exit" />
            <section className="payment-container">
                <div className="payment-area-content">
                    <div className="QR-area">
                        <img src={QR} alt="Selected Box" />
                    </div>
                    <div className="Information-area">
                        <h1>Chuyển khoản thông qua mã QR</h1>
                        <h2>Số tiền: {orderDetail.price}</h2>
                        <h2>Nội dung chuyển khoản: {orderDetail.boxId}</h2>
                        <h2>Lưu ý:</h2>
                        <p>Sau khi chuyển khoản thành công, hãy click vào button bên dưới. Nhân viên sẽ xác nhận và thông báo đơn hàng của bạn sau ít phút</p>
                        <button className='pay-button' onClick={handleConfirmClick}>Xong</button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default PopupMenu;
