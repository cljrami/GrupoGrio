// ACCORDION
// import AccorDions from "./components/AccorDions/AccorDions";
// NAVBAR
import NavBar from "./components/NavBar/NavBar";
import "./components/NavBar/NavBar.css";

//FANCYBOX
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind('[data-fancybox="gallery"]', {
  //
});

// QUIENES SOMOS
// import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
// import "./components/QuienesSomos/QuienesSomos.css";
// RED DE APOYO
import RedDeApoyo from "./components/RedDeApoyo/RedDeApoyo";
import "./components/RedDeApoyo/estilo.css";
import SliderRedDeApoyo from "./components/RedDeApoyo/SliderRedDeApoyo";
//HOME VIDEO
import HomeVideo from "./components/HomeVideo/HomeVideo";
import "./components/HomeVideo/HomeVideo.css";

//NUESTRO DIRECTORIO
import NuestroDirectorio from "./components/NuestroDirectorio/NuestroDirectorio";
import "./components/NuestroDirectorio/estilo.css";
import SliderNuestroDirectorio from "./components/NuestroDirectorio/SliderNuestroDirectorio";
//HERO
import Hero from "./components/Hero/Hero";
import "./components/Hero/Hero.css";
// FOOTER
// import "./components/Footer/Footer.css";
// import Footer from "./components/Footer/Footer";




function App() {
  return (
    <>
      <NavBar></NavBar>
      

      <div className="container main">
        <Hero></Hero>

        <NuestroDirectorio></NuestroDirectorio>
        <SliderNuestroDirectorio></SliderNuestroDirectorio>
        <HomeVideo></HomeVideo>
        {/* <QuienesSomos></QuienesSomos> */}
        <RedDeApoyo></RedDeApoyo>
        <SliderRedDeApoyo></SliderRedDeApoyo>
        {/* 
        <AccorDions></AccorDions> */}
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
