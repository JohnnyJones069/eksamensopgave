import axios from 'axios'
import { baseUrl } from './Api'


//  GET - Alle tours fra API
export const getAllTours = async () => {
    let res = await axios.get(baseUrl + 'tours')
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

// GET - Søg i tours
export const searchTours = async (searchKey) => {
    let res = await axios.get(baseUrl + 'tours/soeg/' + searchKey)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

// GET - tag specifik ID
export const getTourByID = async (ID) => {
    let res = await axios.get(baseUrl + 'tours/' + ID)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // GET - tag teaser fra API
  export const getToursTeaser = async () => {
    let res = await axios.get(baseUrl + 'tours/teaser/')
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

  // Delete - slet udvalgt tour
export const deleteTour = async (tourID) => {
    let res = await axios.delete(baseUrl + "tours/admin/" + tourID)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // Post - opret tour
  export const createTour = async (newTour) => {
    let res = await axios.post(baseUrl + "tours/admin", newTour )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // PUT - ret tour
  export const editTour = async (updatedTour, tourID) => {
    let res = await axios.put(baseUrl + "tours/admin/" + tourID, updatedTour )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}