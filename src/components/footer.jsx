import * as feather from 'react-feather';

const Footer= ()=> {
  return (
  <div class="cl container">
  <footer>
    <div class="row">
      <div class="we col-sm-3">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div class="wa col-sm-3">
        <p>Our services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>
      <div class="wu col-sm-3">
        <p class="p13">Connect with us</p>
          <img src="img/icon_facebook.png" alt="facebook" class="sosmed facebook">
          <img src="img/icon_instagram.png" alt="instagram" class="sosmed instagram">
          <img src="img/icon_twitter.png" alt="twitter" class="sosmed twitter">
          <img src="img/icon_mail.png" alt="mail" class="sosmed mail">
          <img src="img/icon_twitch.png" alt="twitch" class="sosmed twitch">
      </div>
      <div class="wi col-sm-3">
        <p class="p14">Copyright Binar 2022</p>
        <img src="img/logo.png" alt="logo" class="logo">
      </div>
    </div>
  </footer>
</div>
  );
};

export default Footer;
