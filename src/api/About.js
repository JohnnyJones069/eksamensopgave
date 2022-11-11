import axios from "axios";
import { baseUrl } from "./Api";

export const getAbout = async () => {
  let res = await axios
    .get(baseUrl + "about")
    .then(res => {
      return res;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};

export const editAbout = async ( data ) => {
  let res = await axios.put(baseUrl + 'about/admin', data)
  .then(res => {return res;})
  .catch(err => {return err})
  return res;
}

