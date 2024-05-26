import React, { useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import aboutHeroBanner from '../assets/images/about-hero-banner.jpg';
import foundersOurStory from '../assets/images/founders-our-story.jpg';
import foundersOurMission from '../assets/images/founders-our-mission.jpg';

const About = () => {
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.content-container img, .content-container p');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
      element.classList.add('hidden');
      observer.observe(element);
    });
  }, []);

  return (
    <React.Fragment>
      <HeroBanner heading="About Us" imageFile={aboutHeroBanner} />
      <section className="main-content about">
        <h3>Our Story</h3>
        <section className="content-container">
          <figure>
            <img src={foundersOurStory} alt="photo of founders smiling at camera in the kitchen" />
          </figure>
          <p>Lấy cảm hứng từ niềm khao khát khởi nghiệp và tạo ra sự mới mẻ, chúng tôi - một nhóm sinh viên trẻ tuổi - đã khởi nghiệp với dự án kinh doanh cà phê kết hợp cùng món quà tặng kỳ lạ. Chúng tôi tin rằng mỗi ngày đều là một dịp để gửi đi những lời yêu thương đến những người thân yêu, và không gì tốt hơn là thông qua những tách cà phê thơm ngon cùng những món quà ý nghĩa.</p>
        </section>
        <h3>Our Mission</h3>
        <section className="content-container">
          <figure>
            <img src={foundersOurMission} alt="photo of founders brewing coffee in the kitchen" />
          </figure>
          <p>Với triết lý kinh doanh "Yêu thương nhau bằng mọi cách có thể", chúng tôi mong muốn lan tỏa thông điệp tích cực này đến cộng đồng. Bất kể lớn hay nhỏ, công khai hay kín đáo, tất cả những tình cảm yêu thương đều đáng được tôn vinh và trân trọng. Hãy để chúng tôi giúp bạn gửi đi những lời nhắn yêu thương ấy qua từng tách cà phê thơm ngát và món quà đong đầy tình cảm.</p>
        </section>
      </section>
    </React.Fragment>
  );
}

export default About;
