import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const domain = 'https://mem.terse.live'
let saved_token = null;
(async()=>{
  saved_token = await AsyncStorage.getItem("@token");
  console.log(saved_token);
})();
export const createApi = () => {
  const api = axios.create({
    baseURL: domain
  })

  return {
    // role is either 'family_member' or 'staff'
    // userProfile is the object: { username, password, role, first_name, last_name }
    register: (userProfile) => api.post('/api/register', userProfile).then(res => res).catch(err => err),
    login: (userProfile) => api.post('/api/login', userProfile).then(res => res).catch(err => err)
  }
}

export const createAuthApi = (token=null) => {
  if(!saved_token){
    saved_token = token;
  }
  const authApi = axios.create({
    baseURL: domain,
    headers: {
      Authorization: `Bearer ${token || saved_token}`
    }
  })

  return {
    getUserProfile: () => authApi.post('/api/profile').then(res => res).catch(err => err),
    connectSenior: (account_number) => authApi.post('/api/senior/connect', { account_number }).then(res => res).catch(err => err),
    // seniorProfile is the object: { account_number, first_name, last_name, birth_date, profile_picture, bio, likes, dislikes }
    addSenior: (seniorProfile) => authApi.post('/api/senior/add-profile', seniorProfile).then(res => res).catch(err => err),
    updateSenior: (seniorProfile) => authApi.post('/api/senior/update-profile', seniorProfile).then(res => res).catch(err => err),
    getSenior: (account_number) => authApi.post('/api/senior/profile', { account_number }).then(res => res).catch(err => err),
    getConnectedSeniors: () => authApi.get('/api/senior/connected-profiles').then(res => res).catch(err => err),
    // entryData is the object: { senior_id, title, date, content }
    addEntry: (entryData) => authApi.post('/api/senior/add-entry', entryData).then(res => res).catch(err => err),
    // updatedEntryData is the object: { id, title, date, content }
    updateEntry: (updatedEntryData) => authApi.post('/api/senior/update-entry', updatedEntryData).then(res => res).catch(err => err),
    getEntries: (account_number) => authApi.post('/api/senior/entries', { account_number }).then(res => res).catch(err => err)
  }
}