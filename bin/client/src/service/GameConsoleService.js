import axios from 'axios';

export class GameConsoleService{
    baseUrl = "http://localhost:8080/retroshare/";
    getAll(){
        return axios.get(this.baseUrl + "gc-all").then(res=> res.data);
    }
}