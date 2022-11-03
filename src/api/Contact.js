import axios from "axios";
import { baseUrl } from "./api";

export const getInfo = async () => {
    let res = await axios.get(baseUrl + 'conttactinformation')
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

export const editInfo = async (formData) => {
    let formdata = new FormData(formData)

    let res = await axios.put(baseUrl + 'contactinformation/admin', formdata)
    .then(res => {return res;})
    .catch( err => {return err})
    return res;
}

export const patchContact = async (id, data) => {
    let res = await axios.patch(baseUrl + 'contact/admin/' + id, data)
    .then(res => {return res;})
    .catch(err => {return null})
    return res;
}

