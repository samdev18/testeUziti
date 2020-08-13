import React from "react";

import "./styles.css";
import RoundedButton from "../RoundedButton";
import Input from "../Input";
import Button from "../Button";

interface productCardProps {
  name: string;
  description: string;
  price: string;
  img_url: string;
  promotion_text?: string;
}

const ProductCard: React.FC<productCardProps> = (props) => {
  return (
    <div className="product-item-card">
      <img src={props.img_url} alt={props.name} />

      <div className="product-item-card-content">
        <strong>{props.name}</strong>
        <section id="description">
          <p>{props.description}</p>
        </section>

        <section>
          <strong>RD${props.price}/Unit</strong>
        </section>
        <section id="promotion-text">
          <p>{props.promotion_text}</p>
        </section>
        <section id="view-details">
          <a href="#">View details</a>
        </section>
      </div>

      <footer>
        <div id="footer-section">
          <RoundedButton minus />

          <Input id="quantity-input" disabled name="quantity" />

          <RoundedButton plus />

          <Button text="ADD" id="button-add" />
        </div>
      </footer>
    </div>
  );
};
export default ProductCard;
