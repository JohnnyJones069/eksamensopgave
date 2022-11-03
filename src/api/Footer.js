import axios from 'axios'
import { baseUrl } from './Api'

export const getFooter = async () => {
    let res = await axios.get(baseUrl + 'footer')
    .then(res => {return res;})
    .catch( err => {return err})
    return res;
}

export const editFooter = async ( data ) => {
    let res = await axios.put(baseUrl + 'footer/admin', data)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

