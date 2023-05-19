import './../helpers/jquery';
import {Link} from 'react-router-dom';
import * as feather from 'react-feather';
import OwlCarousel from 'react-owl-carousel';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron';

const HomePage= ()=> {
return (
  <>
    <Jumbotron showNavigateBtn={true} />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
      integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />

      <div class="ly container">
        <div class="row">
          <div class="col-sm-6">
            <img src="img/img_service.png" alt="service" class="service img-fluid">
          </div>
          <div class="col-sm-6">
            <h1 class="hd2">Best Car Rental for any kind of trip in Mataram!</h1>
            <p class="p2">Sewa mobil di Mataram bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <ul class="tm">
              <li><span class="icon"></span>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              <li><span class="icon"></span>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li><span class="icon"></span>Sewa Mobil Jangka Panjang Bulanan</li>
              <li><span class="icon"></span>Gratis Antar - Jemput Mobil di Bandara</li>
              <li><span class="icon"></span>Layanan Airport Transfer / Drop In Out</li>
            </ul>            
          </div>
        </div>
      </div>

      <div class="container">
        <div class="why container">
          <h1 class="hd3" id="Why Us">Why Us?</h1>
          <p class="p3">Mengapa harus pilih Binar Car Rental?</p>
        </div>
        
        <div class="kartu container">
          <div class="card">
            <img src="img/icon_complete.png" class="ic1">
            <h3 class="hd4">Mobil Lengkap</h3>
            <p class="p4">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
          </div>
          <div class="card">
            <img src="img/icon_price.png" class="ic2">
            <h3 class="hd5">Harga Murah</h3>
            <p class="p5">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </div>
          <div class="card">
            <img src="img/icon_24hrs.png" class="ic3">
            <h3 class="hd6">Layanan 24 Jam</h3>
            <p class="p6">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
          </div>
          <div class="card">
            <img src="img/icon_professional.png" class="ic4">
            <h3 class="hd7">Sopir Profesional</h3>
            <p class="p7">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </div>
        </div>
    </div>

   <div class="s container">
    <div class="e container">
    <h1 class="hd8" id="Testimonial">Testimonial</h1>
    <p class="p8">Berbagai review positif dari para pelanggan kami</p>
  </div>
<div id="demo" class="demo carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/img_photo1.png" alt="photo1" class="photo">
      <div class="container">
        <img src="img/Rate.png" alt="bintang" class="bintang">
        <p class="p9">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
        <p class="p10">John Dee 32, Bromo</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/img_photo2.png" alt="photo2" class="photo">
      <img src="img/Rate.png" alt="bintang" class="bintang">
        <p class="p9">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
        <p class="p10">John Dee 32, Bromo</p>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
</div>

  <div class="kotak container">
    <div class="q container">
      <div class="f container">
      <h1 class="hd9">Sewa Mobil di Mataram Sekarang</h1>
      <p class="p11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <a class="sbt btnmulaisewa btn btn-success text-light" href="#">Mulai Sewa Mobil</a>
    </div>
  </div>

  <div class="z container">
    <div class="row">
      <div class="col-sm-6">
        <h2 class="hd10" id="FAQ">Frequently Asked Question</h2>
        <p class="p12">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div class="us col-sm-6">
        <div class="as accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Apa saja syarat yang dibutuhkan?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Berapa hari minimal sewa mobil lepas kunci?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Apakah Ada biaya antar-jemput?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Bagaimana jika terjadi kecelakaan
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>            
      </div>
    </div>
  </div>

    <Footer />
  </>
);
};

export default HomePage;
