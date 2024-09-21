import axios from 'axios'
const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "bae5ddc00dae4c53a199c24abe25c638"
const redirectUri = "http://localhost:3000"
const scopes = ["user-library-read", "playlist-read-private"];

//export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
 export const loginEndpoint = " https://accounts.spotify.com/authorize?client_id=bae5ddc00dae4c53a199c24abe25c638&redirect_uri=http://localhost:3000&scope=user-library-read%20playlist-read-private&response_type=token&show_dialog=true";


  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });

  export const setClientToken =(token) =>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer" + token;
        return config;
    })
  }

  export default apiClient;
  