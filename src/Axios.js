import axios from 'axios'
import {baseurl,api_key} from './Constent/Constend'
const instance  = axios.create({
    baseUrl: baseurl,
})
export default instance