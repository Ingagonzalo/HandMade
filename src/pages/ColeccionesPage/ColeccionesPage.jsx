import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Colecciones from "../../components/Colecciones/Colecciones.jsx";
import Destacados from "../../components/Destacados/Destacados.jsx";
import imagenes from "./ColeccionesPageImagenes.js";
import "./ColeccionesPage.css";

const ColeccionesPage = () => (
  <div>
    <Hero></Hero>
    <Colecciones></Colecciones>
    <Destacados></Destacados>
    <div className="collectionPageList">
      <h2 >Colección Parejas</h2>
      <p>
        En Hand Made podés encontrar el regalo ideal para compartir con tu
        pareja. Seguinos en Instagram para estar al tanto de nuestras novedades
        y descubrir qué otros productos tenemos para vos.
      </p>
      <div className="collectionPageListImages">
        <img src={imagenes[0].img} alt={imagenes[0].title} />
        <img src={imagenes[1].img} alt={imagenes[1].title} />
        <img src={imagenes[2].img} alt={imagenes[2].title} />
        <img src={imagenes[3].img} alt={imagenes[3].title} />
      </div>
    </div>
    <div className="collectionPageList">
      <h2>Colección Amistad</h2>
      <p>
        En Handmade encontrarás el regalo perfecto para celebrar la amistad.
        Seguinos en Instagram para estar al tanto de nuestras novedades y
        sorprenderte con nuestras creaciones pensadas especialmente para
        compartir el amor y la amistad
      </p>
      <div className="collectionPageListImages">
        <img src={imagenes[4].img} alt={imagenes[4].title} />
        <img src={imagenes[5].img} alt={imagenes[5].title} />
        <img src={imagenes[6].img} alt={imagenes[6].title} />
      </div>
    </div>
    <div className="collectionPageList">
      <h2>Colección Familia</h2>
      <p>
        En Hand Made descubrirás el regalo perfecto para celebrar el amor y la
        unión familiar. Seguinos en Instagram para estar al tanto de nuestras
        novedades y conocer nuestra amplia variedad de productos diseñados para
        crear momentos especiales junto a tus seres queridos.
      </p>
      <div className="collectionPageListImages">
        <img src={imagenes[7].img} alt={imagenes[7].title} />
        <img src={imagenes[8].img} alt={imagenes[8].title} />
        <img src={imagenes[9].img} alt={imagenes[9].title} />
      </div>
    </div>
    <div className="collectionPageList">
      <h2>Colección para Vos</h2>
      <p>
        Nuestra colección Para Vos está diseñada especialmente para consentirte.
        Seguinos en Instagram para estar al tanto de nuestras novedades y
        descubrir qué otros productos tenemos preparados exclusivamente para
        vos.
      </p>
     <div className="collectionPageListImages">
        <img src={imagenes[10].img} alt={imagenes[10].title} />
        <img src={imagenes[11].img} alt={imagenes[11].title} />
        <img src={imagenes[12].img} alt={imagenes[12].title} />
     </div>
    </div>
  </div>
);

export default ColeccionesPage;
