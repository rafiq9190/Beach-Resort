import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktail",
        info:
          "Lorem dolor sit amet consectetur adipisicing elit.Magni,Corporis!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hikking",
        info:
          "Lorem dolor sit amet consectetur adipisicing elit.Magni,Corporis!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem dolor sit amet consectetur adipisicing elit.Magni,Corporis!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem dolor sit amet consectetur adipisicing elit.Magni,Corporis!"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
