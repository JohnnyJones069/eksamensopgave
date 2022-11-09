import axios from "axios";
import { baseUrl } from "./Api";

// GET
export const getContactInformation = async () => {
    let res = await axios.get(baseUrl + 'contactinformation')
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

// PUT - ret ContactInformation
export const editContactInformation = async () => {
    let res = await axios.put(baseUrl + "contactinformation/admin" )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

  // Delete - slet udvalgt ContactInformation
  export const deleteContactInformationSome= async (ContactInformationsomeID) => {
    let res = await axios.delete(baseUrl + "contactinformation/some/admin/" + ContactInformationsomeID)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // Post - opret ContactInformation
  export const createContactInformationSome = async () => {
    let res = await axios.post(baseUrl + "contactinformation/some/admin" )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

