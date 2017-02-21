import axios from 'axios';
const port=':8080/';
const host='http://api.com'+port;
export default {
	get(url,params){
		return axios({
			method:'get',
			url:host+url,
      params:params,
		})
	}
}
