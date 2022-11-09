import axios from 'axios'
import { baseUrl } from './Api'


//  GET - Alle news fra API
export const getAllNews = async () => {
    let res = await axios.get(baseUrl + 'news')
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

// GET - Søg i news
export const searchNews = async (searchKey) => {
    let res = await axios.get(baseUrl + 'news/soeg/' + searchKey)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

// GET - tag specifik ID
export const getNewsByID = async (ID) => {
    let res = await axios.get(baseUrl + 'news/' + ID)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // Delete - slet udvalgt news
export const deleteTour = async (newsID) => {
    let res = await axios.delete(baseUrl + "news/admin/" + newsID)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // Post - opret News
  export const createNews = async (newNews) => {
    let res = await axios.post(baseUrl + "news/admin", newNews )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // PUT - ret News
  export const editNews = async (updatedNews, newsID) => {
    let res = await axios.put(baseUrl + "news/admin/" + newsID, updatedNews )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}