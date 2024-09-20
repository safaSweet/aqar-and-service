import axios from 'axios';
import Cookie from "cookie-universal";
const cookie = Cookie();
const Authorization = cookie.get('accessToken')
	? 'Bearer ' + cookie.get('accessToken')
	: undefined;

// TODO: add base url to env
export const api = axios.create({

	// baseURL:'http://192.168.137.146:8000/api',
	baseURL:'http://aqar.services.lino5271.odns.fr/api',
	headers: {
		Authorization,
	},
});
