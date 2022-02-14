import api from "../../services/api";
import { addCustomer } from "../customers";

export const getCustomer = (customer) => {
  return (dispatch) => {
    api
      .get(`/${customer}`)
      .then((res) => {
        dispatch(addCustomer(res.data));
      })
      .catch();
  };
};
