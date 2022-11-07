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

export const editService = async (data) => {
  const getFormData = data =>
    Object.keys(data).reduce((formData, key) => {
      formData.append(key, data[key]);
      return formData;
    }, new FormData());

    let res = await axios.put(baseUrl + 'service/admin', getFormData(data))
    .then(res => {return res;})
    .catch(err => {return err.response})
}
