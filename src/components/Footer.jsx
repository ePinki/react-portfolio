import React from 'react';

function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer__left">
        <div className="footer__left-name">
          <p className='text'>find me in:</p>
        </div>
        <div className="footer__left-img-1 footer__left-img">
          <a href="https://vk.com/nayar2"><img src="img/footer-1.png" alt="" /></a>
        </div>
        <div className="footer__left-img-2 footer__left-img">
          <a href="https://vk.com/nayar2"><img src="img/footer-2.png" alt="" /></a>
        </div>
      </div>

      <div className="footer__right">
        <p className='footer__right-text text'>@epinki</p>
        <a c href="https://vk.com/nayar2"><img className='footer__right-img' src="img/footer-3.png" alt="" /></a>
      </div>
    </div>
  )
}


export default Footer;