 import axios from 'axios';

export class GameService{
    baseUrl = "http://localhost:8080/retroshare/";
    getAll(){
        return axios.get(this.baseUrl + "g-all").then(res=> res.data);
    }
	createGame(game){
		return axios.post(this.baseUrl+"g-save",game); 
	}
}