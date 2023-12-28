const HomeVideo = () => {
  return (
    <div>
      <section id="VideoHome">
        <div className="row">
          <div className="col-md-4 col-12">
          <h2>Nuestro Grupo </h2>
        <h3>Grupo Grio En Acción</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum officiis deleniti voluptate? Vitae nam corrupti voluptas, provident rerum inventore omnis facilis repudiandae tempora incidunt laborum dolores, sunt quas repellendus sed!</p>
          </div>
          <div className="col-md-8 col-12">
          <div className="Play">
          <a data-fancybox="gallery" href="/assets/videos/dron-en-accion.mp4">
            <video src="/assets/videos/presentacion.mp4" width="100%"></video>
            <div className="Boton">
              <i className="fas fa-play"></i>
            </div>
          </a>
        </div>
          </div>
        </div>
  
        
      </section>
    </div>
  );
};

export default HomeVideo;
