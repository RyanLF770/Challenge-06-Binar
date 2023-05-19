/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';

const Jumbotron= ({showNavigateBtn= false})=> {
  return (
      <div class="jumbotron jumbotron-fluid">  
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <img src="img/logo.png" alt="Logo" class="logo">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link text-black" href="#Our Services">Our Services</a>
              <a class="nav-link text-black" href="#Why Us">Why Us</a>
              <a class="nav-link text-black" href="#Testimonial">Testimonial</a>
              <a class="nav-link text-black" href="#FAQ">FAQ</a>
              <a class="register btn btn-success text-light" href="#">Register</a>
            </div>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="sewa col-sm-6">
            <h1 class="hd1" id="Our Services">Sewa & Rental Mobil Terbaik di kawasan Mataram</h1>
            <p class="p1">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <a class="btnmulaisewa btn btn-success text-light" href="cars.html">Mulai Sewa Mobil</a>
          </div>
          <div class="mobil col-sm-6">
            <img src="img/img_car.png" alt="Car" class="car img-fluid">
          </div>
        </div>
      </div>
      </div>  
  );
};

export default Jumbotron;
