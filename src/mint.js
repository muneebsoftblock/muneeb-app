import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
function detectMob() {
  if (window.innerWidth <= 500 && window.innerHeight <= 920) return 'mobile';
  if (window.innerWidth <= 1024 && window.innerHeight <= 1244) return 'tablet';
  if (window.innerWidth <= 1440 && window.innerHeight <= 1244) return 'laptop_small';
  else return 'laptop_large';
}
const isMobile = detectMob();
const imgFolder = isMobile === 'mobile' ? 'images-mobile' : 'images';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const Mint = () => {
  useEffect(() => {
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      <Row>
        <Row>
          <Col lg={2}>
            <img src='images/Logo.png' alt='morph' />
          </Col>

          <Col lg={3}></Col>

          <Col lg={2}>
            <img src='images/BTN MINT.png' alt='morph' />
          </Col>

          <Col lg={3}></Col>

          <Col lg={2}>
            <img src='images/BTN CONNECT.png' alt='morph' />
          </Col>
        </Row>

        <Row>
          <img src='images/morph-mint.gif' alt='morph' style={{ width: '60%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        </Row>
      </Row>
    </div>
  );
};

export default Mint;
