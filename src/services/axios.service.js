import axios from "axios";
import REACT_APP_API_URL from "../constants/urls"


export const axiosService = axios.create({baseURL: REACT_APP_API_URL});
