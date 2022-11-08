import React from "react";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../../Others/Service/Service";
import Slider from "../Slider/Slider";

const Home = () => {
   const services = useLoaderData();
   
   return (
      <div>
         <Slider></Slider>
         <div className="service-section">
            <h1>OUR SERVICES</h1>
            <div className="services">
               {services.map((service) => (
                  <Service key={service._id} service={service}></Service>
               ))}
            </div>
            <Link to="/services">
               <button className="btn btn-primary mt-10">See All</button>
            </Link>
         </div>
      </div>
   );
};

export default Home;
