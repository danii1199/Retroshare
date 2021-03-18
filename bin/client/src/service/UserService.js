import axios from 'axios';

export class UserService{
    baseUrl = "http://localhost:8080/retroshare/";
    getAll(){
        return axios.get(this.baseUrl + "all").then(res=> res.data);
    }
}