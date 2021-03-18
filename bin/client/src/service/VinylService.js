import axios from 'axios';



export class VinylService {
  baseUrl = "http://localhost:8080/retroshare/";
  getAll() {
    return axios.get(this.baseUrl+ "v-all").then(res => res.data);
  }
}


