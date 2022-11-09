import axios from 'axios'
import { baseUrl } from './Api'


//  GET - Alle team members fra API
export const getAllTeam = async () => {
    let res = await axios.get(baseUrl + 'team')
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}


// GET - tag specifik ID
export const getTeamByID = async (ID) => {
    let res = await axios.get(baseUrl + 'team/' + ID)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}

  // Delete - slet udvalgt team
export const deleteTeam= async (teamID) => {
    let res = await axios.delete(baseUrl + "team/admin/" + teamID)
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // Post - opret team member
  export const createTeam = async (newTeam) => {
    let res = await axios.post(baseUrl + "team/admin", newTeam )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}
  
  // PUT - ret team Member
  export const editTeam = async (updatedTeam, teamID) => {
    let res = await axios.put(baseUrl + "team/admin/" + teamID, updatedTeam )
    .then(res => {return res;})
    .catch(err => {return err})
    return res;
}