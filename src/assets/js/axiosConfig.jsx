import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { getCookie, SwalControlar } from "./utlis";

const useAxiosConfig = () => {
  const swal = new SwalControlar();

  const { setIsLoading } = useContext(AppContext);
  const AUTH_TOKEN = getCookie("token");
  axios.defaults.baseURL = "http://localhost:1500";
  axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";

  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      // Set loading to false when the request starts
      setIsLoading(true);
      return config;
    },
    (error) => {
      // Handle request errors here

      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    (response) => {
      // Set loading to true when the response is received
      setIsLoading(false);

      return response;
    },
    (error) => {
      setIsLoading(false); // Stop loading in case of any error
      console.log(error);
      // Check if the error is a network error (like ERR_CONNECTION_REFUSED)
      if (error.request) {
        // This means there was no response from the server (e.g., connection refused)
        swal.rejected(
          null,
          "Unable to connect to the server. Please check your internet connection or try again later."
        );
      } else if (error.response) {
        // Handle other HTTP errors that have responses, e.g., 500, 404, etc.
        if (error.response.status === 500) {
          swal.rejected(
            null,
            "An unexpected error occurred on the server. Please try again later."
          );
        } else {
          swal.rejected(
            null,
            error.response.data?.message ||
              "Error" ||
              "Something went wrong. Please try again later."
          );
        }
      } else {
        // Handle other types of errors (e.g., configuration errors)
        swal.rejected(
          "Error",
          error.message || "Something went wrong. Please try again later.",
          "error"
        );
      }

      return Promise.reject(error); // Propagate the error further if necessary
    }
  );

  return {};
};
export { useAxiosConfig };
