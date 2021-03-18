import axios from 'axios';

export class RecordPlayerService{
    baseUrl = "http://localhost:8080/retroshare/";
    getAll(){
        return axios.get(this.baseUrl + "rp-all").then(res=> res.data);
    }
}