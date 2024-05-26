import React from 'react';
import MenuList from '../components/ProductList';
import HeroBanner from '../components/HeroBanner';
import menuHeroBanner from '../assets/images/menu-hero-banner.jpg';

const Menu = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Our Menu" imageFile={menuHeroBanner} />
      <section className="main-content menu">
        <h3>Drinks</h3>
        <p className="menu-info"><span className="bold">Các lựa chọn sữa:</span> Ít béo, Sữa gầy, Half & Half, Hạnh nhân, Yến mạch</p>
        <p className="menu-info"><span className="bold">Xi-rô tự làm (20.000 VND):</span> Mocha, White Mocha, Caramel, Vanilla, Cinnamon, Raspberry, Hazelnut, Lavender</p>
        <h4>Coffee</h4>
        <MenuList type="CF" />
        <h4>Sweet choices</h4>
        <MenuList type="DK" />
        <hr />
        <h3>Food</h3>
        <h4>Bakery</h4>
        <MenuList type="CK" />
      </section>
    </React.Fragment>
  );
}

export default Menu;