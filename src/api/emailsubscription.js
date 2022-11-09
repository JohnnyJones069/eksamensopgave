import axios from 'axios'
import { baseUrl } from './Api'


//  GET - Alle tours fra API
export const getAllNewssubscribtion = async () => {
    let res = await axios.get(baseUrl + 'newssubscription/admin')
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}


// GET - tag specifik ID
export const getTestimonialByID = async (ID) => {
    let res = await axios.get(baseUrl + 'testimonial/' + ID)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

  // Delete - slet udvalgt testimonial
export const deleteTestimonial= async (testimonialID) => {
    let res = await axios.delete(baseUrl + "testimonial/admin/" + testimonialID)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // Post - opret testimonial
  export const createNewssubscription = async (newsSubscription) => {
    let res = await axios.post(baseUrl + "newssubscription", newsSubscription )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // PUT - ret testimonial
  export const editTestimonial = async (updatedTestimonial, testimonialID) => {
    let res = await axios.put(baseUrl + "testimonial/admin/" + testimonialID, updatedTestimonial )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}