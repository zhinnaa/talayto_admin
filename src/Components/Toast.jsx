import {toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export function Toast(message, type) {
  if (type === true) {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
     
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      rtl: true,
      
    });
  } else {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      rtl: true,
    });
  }
}
