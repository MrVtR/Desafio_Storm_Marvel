import md5 from "blueimp-md5";
import axios from 'axios';

async function GetApi(gateway){
  const ts = 1;
  const publicApiKey = '341c38efd01a1b4e7f0a28c32b393ec3';
  const hash = md5(ts + process.env.REACT_APP_MARVEL_PRIVATE_KEY+ publicApiKey);
  const url = gateway + ts + '&apikey=' + publicApiKey + '&hash=' + hash;
  

    try{
        const request = await axios.get(url);
        //console.log(request);
        return request.data;
    }
    catch(e){
      console.log("ERRO")
      return false;
    }
    
  }
export default GetApi;


