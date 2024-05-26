import React from 'react';
import HeroBanner from '../components/HeroBanner';
import visitHeroBanner from '../assets/images/visit-hero-banner.jpg';

const Visit = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Visit Us" imageFile={visitHeroBanner} />
      <section className="main-content visit">
        <h3>Hours</h3>
        <p>Hằng ngày 7AM - 8PM</p>
        <h3>Phone</h3>
        <p><a href="tel:0386751108">038 675 1108</a></p>
        <h3>Fanpage</h3>
        <p><a href="https://www.facebook.com/52Bluepetitlapin">https://www.facebook.com/52Bluepetitlapin</a></p>
        <h3>Location</h3>
        <p>242 Huỳnh Văn Nghệ, Đà Nẵng</p>
      </section>
    </React.Fragment>
  );
}

export default Visit;