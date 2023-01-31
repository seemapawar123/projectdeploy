import React from 'react';

const Home=()=>{
    return(
    
        <div>

          <h1 id="cg">SHRINIWAS COLLEGE OF SCIENCE AND TECHNOLOGY</h1>
          <h6 id="cg">*Affilated to RGPV Bhopal and DAVV Indore</h6>
          <h6 id="cg">*An ISO 9002 Certified Institute</h6>

         <link rel="icon" href=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaI-_XCCqrNImhYEFvcanPgrgQ7hcijnQzzQr3DFgOww&s"></link>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id= "img" src="https://i.ytimg.com/vi/AQZNVpYumDc/maxresdefault.jpg" class="d-block w-70 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://www.mrscindore.org/image-uploads/slider/t2303190213060.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://www.mrscindore.org/image-uploads/slider/t2303190212430.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Home;