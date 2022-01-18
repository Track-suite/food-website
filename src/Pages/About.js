import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
          It all started in 1972, when owner Judy Waller opened her first U.S.
          Pizza Company in a burned out clock shop in Levy, AR. Armed with a
          unique recipe for thin crust pizza and an old fashioned stone hearth
          oven, U.S. Pizza embarked on a quarter-of-a-century journey that has
          done everything but dwindle. That first store grossed only about
          $1,000 per week, but ten other U.S. Pizza Company locations have
          opened since. In addition to the chain of U.S. Pizza Companies, in
          1981, Judy opened Hillcrest Liquor Store on Kavanaugh Boulevard in
          Little Rock. Since we opened our first store in 1972, we’ve been
          making our thin crust pizza from scratch when you order it. And we
          still use stone hearth ovens. That’s one of the reasons our unique
          pizzas are worth the wait! We pride ourselves in offering you the very
          best pizza, salads and sandwiches, and we value your patronage. Click
          the Awards tab to read more about our tasty history, distinguishing
          awards, and community involvement.
        </p>
      </div>
    </div>
  );
};

export default About;
