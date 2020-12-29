import md5 from "blueimp-md5";
import {useState, useEffect} from 'react'
import axios from 'axios';

function GetApi(gateway){
  const [product, setProduct] = useState(null);
  const ts = 1;
  const publicApiKey = '1a9d39221ae112b3821a08fd3c419183';
  const hash = md5(ts + process.env.REACT_APP_NOT_SECRET_CODE+ publicApiKey);
  const url = gateway + ts + '&apikey=' + publicApiKey + '&hash=' + hash;
  
  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(url);
      setProduct(request.data);
    }
    fetchData();
  }, [url]);
  return product;
}
export default GetApi;


