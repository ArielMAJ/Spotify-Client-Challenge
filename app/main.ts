import { URL } from "url";
import fetch from 'node-fetch';


const apiURL = new URL(
  "https://api.spotify.com/v1/search?q=STEREO&type=album&market=br&limit=2&offset=0&include_external=audio"
);

async function getApiData() {
  const response = await fetch(apiURL, {
    headers: {
      Authorization: `Bearer BQCg-tloI9G86gRdEaz0-zkRgP8zsTkOd358eVbtHZVCvwxLrjzQkr283TYNoCvunRJTYvnNn3DKqp02Zxut-ciOWt6L48M1qgA6L2GVeJ4e6248eSXm`,
    },
  });

  const data = await response.json();
  console.log("data: ", data["albums"]["items"]);
}
getApiData();
