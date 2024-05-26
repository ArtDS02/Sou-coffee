import React from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';

const Home = () => {
  return (
    <section className="main-content home">
      <section className="content-container welcome">
        <p>Lấy cảm hứng từ niềm khao khát khởi nghiệp và tạo ra sự mới mẻ, chúng tôi - một nhóm sinh viên trẻ tuổi - đã khởi nghiệp với dự án kinh doanh cà phê kết hợp cùng món quà tặng kỳ lạ. Chúng tôi tin rằng mỗi ngày đều là một dịp để gửi đi những lời yêu thương đến những người thân yêu, và không gì tốt hơn là thông qua những tách cà phê thơm ngon cùng những món quà ý nghĩa.</p>
      </section>
      <section className="content-container image-gallery">
        <ImageGallery />
      </section>
      <section className="content-container info">
        <div className="info-container menu-info">
          <h2>Coffee, Espresso, Tea, and more...</h2>
          <Link to="/menu" className="button">View Our Menu</Link>
        </div>
        <div className="info-container wifi-info" style={{ position: "relative", padding: "0", backgroundColor: "#DF8D35" }}>
          <h2 style={{ marginBottom: "50px", color: "white" }}>Detail of us</h2>
        <Link style={{ textDecoration: "none" }} to="/about" className="button-link-about">Our Story</Link>
      </div>
      <div className="info-container wifi-info" style={{ position: "relative", padding: "0", backgroundColor: "#432D2D" }}>
        <h2 style={{ marginBottom: "50px", color: "white" }}>Send gift to your </h2>
        <Link style={{ textDecoration: "none" }} to="/buy" className="button-link-about">Combo gift</Link>
      </div>
    </section>
    </section >
  );
}

export default Home;
