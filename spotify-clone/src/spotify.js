 
 export const authEndpoint = "https://accounts.spotify.com/authorize";

 const redirectUri = "http://localhost:3000/"

 const clientId = "3f3713273c07445ea3a24f0b30dd155e"

 const scopes = [
     "user-read-currently-playing",
     "user-read-recently-played",
     "user-read-playback-state",
     "user-top-read",
     "user-modify-playback-state"
 ];

 export const getTokenFromUrl = () => {
     return window.location.hash
     .substring(1)
     .split('&')
     .reduce((inital, item) => {
        var parts = item.split('=');
        inital[parts[0]] = decodeURIComponent(parts[1]);

        return inital;
     }, {});
  }

 export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

