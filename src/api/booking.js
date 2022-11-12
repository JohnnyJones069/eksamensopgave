import axios from 'axios'
import { baseUrl } from './Api'
  
export const getAllBooking= async () => {
  let res = await axios
    .get(baseUrl + "booking/admin")
    .then(res => {
      return res;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};

// GET - tag Booking ID
export const getBookingByID = async (ID) => {
  let res = await axios.get(baseUrl + 'booking/admin/' + ID)
  .then(res => {return res;})
  .catch(err => {return err})
  return res;
}
 // PUT - ret Service
 export const editBooking = async (updatedBooking, bookingID) => {
  let res = await axios.put(baseUrl + "booking/admin/" + bookingID, updatedBooking )
  .then(res => {return res;})
  .catch(err => {return err})
  return res;
}

  // Post - opret booking
  export const createBooking = async (newBooking) => {
    let res = await axios.post(baseUrl + "booking", newBooking )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  

export const deleteBooking= async (bookingID) => {
  let res = await axios.delete(baseUrl + "booking/admin/" + bookingID)
  .then(res => {return res;})
  .catch(err => {return err})
  return res;
}