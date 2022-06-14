import axios from 'axios';
import Jsona from 'jsona';

const url = process.env.VUE_APP_API_BASE_URL;
const jsona = new Jsona();

function get() {
  //return axios.get(`${url}/me`)
  return axios.get(`${url}despachos`)
    .then(response => {
       
      return {
          
        list: jsona.deserialize(response.data),
        meta: response.data.meta,
        data: response.data
        
        
      };
    });
}



export default {
  get
};
