import React from "react";
import pizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

const Conatct = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name.."
            type="text"
          ></input>
          <label htmlFor="name">Email</label>
          <input
            name="name"
            placeholder="Enter your email.."
            type="email"
          ></input>
          <label htmlFor="name">Message</label>
          <textarea rows="6" name="name" required></textarea>
          <button type="submit"> Send Message </button>
        </form>
      </div>
    </div>
  );
};

export default Conatct;
