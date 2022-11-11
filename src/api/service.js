import axios from "axios";
import { baseUrl } from "./Api";

export const getService = async () => {
  let res = await axios
    .get(baseUrl + "service")
    .then(res => {
      return res;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};

  // PUT - ret Service
  export const editService = async (updatedService, serviceID) => {
    let res = await axios.put(baseUrl + "service/admin/" + serviceID, updatedService )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}


export const getServiceID = async (ID) => {
  let res = await axios.get(baseUrl + 'service/' + ID)
  .then(res => {return res;})
  .catch(err => {return err})
  return res;
}