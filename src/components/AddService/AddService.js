import React, { useState } from "react";
import { toast } from "react-toastify";
import useTitle from "../../hook/useTitle";
import "./AddService.css";

const AddService = () => {
   const [service, setService] = useState([]);
   useTitle('AddService')

   const handleSubmit = (event) => {
      event.preventDefault();

      fetch("https://eleventh-assignment-server.vercel.app/allServices", {
         method: "POST",
         headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem('token')}`,
         },
         body: JSON.stringify(service),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               toast.success("service added");
               event.target.reset();
            }
         });
   };

   const handleBlur = (event) => {
      const value = event.target.value;
      const field = event.target.name;
      const storedService = { ...service };
      storedService[field] = value;
      setService(storedService);
   };

   return (
      <div id="service-container" className="add-service">
         <h3>Add you service</h3>
         <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Service Name</span>
               </label>
               <input
                  onBlur={handleBlur}
                  type="text"
                  placeholder="add service name"
                  className="input input-bordered"
                  name="service_name"
                  required
               />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Image URL</span>
               </label>
               <input
                  onBlur={handleBlur}
                  type="text"
                  placeholder="enter image url"
                  className="input input-bordered"
                  name="img"
                  required
               />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Price</span>
               </label>
               <input
                  onBlur={handleBlur}
                  type="number"
                  placeholder="around price"
                  className="input input-bordered"
                  name="price"
                  required
               />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Details</span>
               </label>
               <input
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Say Details"
                  className="input input-bordered"
                  name="description"
                  required
               />
            </div>
            <div className="form-control mt-6">
               <button className="btn btn-primary">Submit</button>
            </div>
         </form>
      </div>
   );
};

export default AddService;
