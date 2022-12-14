import React from "react";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../../Others/Service/Service";
import Slider from "../Slider/Slider";
import ServiceCategory from "../ServiceCategory/ServiceCategory";
import WhyChoose from "../WhyChoose/WhyChoose";
import useTitle from "../../../hook/useTitle";

const Home = () => {
   const services = useLoaderData();
   
   useTitle('Home')

   return (
      <div>
         <Slider></Slider>
         <WhyChoose></WhyChoose>
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
         
         <ServiceCategory></ServiceCategory>
      </div>
   );
};

export default Home;
