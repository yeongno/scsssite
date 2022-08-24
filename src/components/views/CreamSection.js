import React from "react";
import "../../styles/CreamSection.scss";
import gift from "../../assets/gift.png";
import bus from "../../assets/bus.png";
import box from "../../assets/box.png";
import cart from "../../assets/cart.png";

function CreamSection() {
  return (
    <section className="main">
      <div className="center-text">
        <h1>Good Gifts Made Easy</h1>
      </div>

      <div className="allExp">
        <div className="exps">
          <div className="gift">
            <img src={gift} alt="" />
          </div>
          <p>Send As A gift</p>
          <p>Ship your gift with a free personalized message</p>
        </div>
        <div className="exps">
          <div className="gift">
            <img src={bus} alt="" />
          </div>
          <p>Safty Delivering</p>
          <p>Ensuring safe delivery for perfection</p>
        </div>
        <div className="exps">
          <div className="gift">
            <img src={box} alt="" />
          </div>
          <p>We can Separate gift wrapping</p>
        </div>
        <div className="exps">
          <div className="gift">
            <img src={cart} alt="" />
          </div>
          <p>We support all kind of credit card</p>
        </div>
      </div>
    </section>
  );
}

export default CreamSection;
