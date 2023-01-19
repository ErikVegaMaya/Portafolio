import axios from "axios";

class AppRequest {
    get = async (url: string) => {
        console.log(api_url + url);
        return axios.get(api_url + url);
    };

    post = async (url: string, body = {}) => {
        console.log(api_url + url);
        console.log(body);
        return axios.post(api_url + url, body);
    }
}

const api_url = "https://localhost:7233/api";
const api = new AppRequest();
export default api;