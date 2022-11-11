import axios from 'axios'
import { baseUrl } from './Api'
  
  // Post - opret booking
  export const createBooking = async (newBooking) => {
    let res = await axios.post(baseUrl + "booking", newBooking )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  