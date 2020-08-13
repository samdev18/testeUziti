import React from "react";

import modeloNegraImage from "../../assets/images/modelo_negra.jpg";
import presidenteLightImage from "../../assets/images/presidente_light.jpg";
import brahmaLightImage from "../../assets/images/brahma_light.jpg";
import budweiserImage from "../../assets/images/budweiser.jpg";

import "./styles.css";

import ProductCard from "../../components/ProductCard/ProductCard";
function Inicio() {
  return (
    <div className="container">
      <div className="product-container">
        <ProductCard
          name="Modelo Negra"
          description="12 Unit * 33oz Bottle"
          price="32.00"
          img_url={modeloNegraImage}
          promotion_text="Buy 3, get 1 free."
        />
        <ProductCard
          name="Presidente light"
          description="16 Unit * 330ml Bottle"
          price="43.00"
          img_url={presidenteLightImage}
          promotion_text="Buy 3, get 1 free Red Bull or 2 Pepsi Black."
        />
        <ProductCard
          name="Brahma Light  very very light 33 onz - Caja [12 Botellas]"
          description="16 Unit * 330ml Bottle"
          price="43.00"
          img_url={brahmaLightImage}
          promotion_text="For every 5 you buy, get  up to 2 free."
        />
        <ProductCard
          name="Budweiser"
          description="16 Unit * 330ml Bottle and extra long summary on multiple lines"
          price="26.00"
          img_url={budweiserImage}
          promotion_text="For every 5 you buy, get up to 3 free Red Bull or 2 Pepsi Black."
        />
      </div>
    </div>
  );
}
export default Inicio;
