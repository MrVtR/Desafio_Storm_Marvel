import './Home.scss';
import md5 from "blueimp-md5";
import {useState, useEffect} from 'react'
import axios from 'axios';
import { Header, CardContainer } from '../../components/index'

function Home() {

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
    console.log(product.data.results);
    return (
      <>
        <Header/>
        <div className="container">
          {product.data.results.map((Component, key) => (
            <CardContainer data={Component} image={Component.thumbnail.path + "/landscape_incredible.jpg"} key={key} />
          ))}
        </div>
        </>
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

export default Home;
