import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="luxurious Rooms" subtile="deluxe Rooms starting at $199">
          <Link to="/rooms" className="btn-primary">
            Our Room
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
      
    </>
  );
}
