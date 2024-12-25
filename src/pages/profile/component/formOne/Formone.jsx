import React, { useContext, useState } from "react";
import defaultImage from "../../../../../public/icons/default.jpg";
import { AppContext } from "../../../../context/AppContext";
import useDataGetter from "./data";
function Formone() {
  const { user } = useContext(AppContext);
  const { photo } = user;
  console.log(user, " from profile");

  const { formik, imageHandleChange, file } = useDataGetter();

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <img
            src={photo === "default.jpg" ? defaultImage : file}
            className="avatar"
          />
          <input
            id="photo"
            type="file"
            name="photo"
            className="inputfile"
            onChange={imageHandleChange}
          />
          <label htmlFor="photo">Choose a image</label>
        </div>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={user?.name || ""}
          onChange={formik.handleChange}
        />
      

        <label htmlFor="email">E-mail Address</label>
        <input
          type={"email"}
          name="email"
          id="email"
          value={user?.email}
          onChange={formik.handleChange}
        />

        <button type="submit">submit Changes </button>

   
      </form>
    </>
  );
}

export default Formone;
