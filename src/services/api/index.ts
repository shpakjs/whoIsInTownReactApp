import axios from "axios";

import apiUrls from "config/apiUrls";

const axiosInstance = axios.create({
    baseURL: 'https://rest.bandsintown.com/',
  });

const index = {
    getArtist: (artistName: string) => axiosInstance.get(apiUrls.getArtist(artistName)),
    getArtistEvents: (artistName: string) => axiosInstance.get(apiUrls.getArtistEvents(artistName)),
}
export default index;