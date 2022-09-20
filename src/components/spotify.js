// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "https://localhost:3000/";
const clientId = "11ebfca8cb46462cb187e5ef139ec8f6";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const getTokenFromUrl =()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => {
        var parts = item.split('=')
        initial[parts[0]]=decodeURIComponent(parts[1])

        return initial;
    },{});
}


export const loginUrl =`${authEndPoint}?client_id=${clientId}&redirect_url=${redirectUrl}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true `