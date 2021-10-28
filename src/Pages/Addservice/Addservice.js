import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Addservice.css";

const Addservice = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/service", data).then((res) => {
      if (res.data.insertedId) {
        alert("successfully added");
        reset();
      }
    });
  };
  return (
    <div className="addservice">
      <h2>This is an addservice</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("FirstName")} placeholder="fist name" />
        <textarea {...register("Description")} placeholder="Description" />
        <input type="number" {...register("Price")} placeholder="price" />
        <input type="text" {...register("img")} placeholder="img url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Addservice;
