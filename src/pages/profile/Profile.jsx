import React, { useContext, useState } from "react";
import defaultImage from "../../../public/icons/default.jpg";
import eye from "../../../public/icons/Eye.svg";
import { AppContext } from "../../context/AppContext";
import Formone from "./component/formOne/Formone";
import FormTwo from "./component/formTwo/FormTwo";

function Profile() {
  return (
    <>
      <Formone />
      <FormTwo />
    </>
  );
}

export default Profile;
