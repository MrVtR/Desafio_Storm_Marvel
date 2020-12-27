import './App.css';
import md5 from "../node_modules/blueimp-md5/js/md5";
import {useState, useEffect} from 'react'
import axios from 'axios';

import { Header, CardContainer } from '../src/components/index'

function App() {

  const [product, setProduct] = useState(null);
  const ts = 1;
  const publicApiKey = '1a9d39221ae112b3821a08fd3c419183';
  const hash = md5(ts + process.env.REACT_APP_NOT_SECRET_CODE+ publicApiKey);
  const url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + publicApiKey + '&hash=' + hash;

  useEffect(() => {
    axios.get(url)
    .then(response =>{
      setProduct(response.data)
  })
  }, [url]);

  if(product){
    console.log(product.data.results.length)
    return (
      
      <div className="App">
      <div className="appHome">
        <Header/>
      </div>
      <div className="container">
        <CardContainer image={product.data.results[0].thumbnail.path + "/landscape_incredible.jpg"} name={product.data.results[0].name}/>
        <CardContainer image={product.data.results[1].thumbnail.path + "/landscape_incredible.jpg"} name={product.data.results[1].name}/>
        <CardContainer image={product.data.results[2].thumbnail.path + "/landscape_incredible.jpg"} name={product.data.results[2].name}/>
        <CardContainer image={product.data.results[3].thumbnail.path + "/landscape_incredible.jpg"} name={product.data.results[3].name}/>
        <CardContainer image={product.data.results[4].thumbnail.path + "/landscape_incredible.jpg"} name={product.data.results[4].name}/>
        <CardContainer image={product.data.results[5].thumbnail.path + "/landscape_incredible.jpg"} name={product.data.results[5].name}/>
      </div>
      </div>
    );
  }
  else{
    return(
      <div>
        Não Foi
      </div>
    )
    
  }
}

export default App;
