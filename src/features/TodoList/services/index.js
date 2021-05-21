import API from "../../../services";
import apiURL from "../constants/api";

export const fetchAllPost = () => {
    return API.get(apiURL.fetchAllPost);
}

export default {
    fetchAllPost
}