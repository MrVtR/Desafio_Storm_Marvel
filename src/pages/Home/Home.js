import './Home.scss';

import { Header, CardContainer } from '../../components/index'
import getApi from "../../services/getApi";
import {useState, useEffect} from 'react'

function Home() {
  const [personagens,setPersonagens] = useState(false);
  const gateway = 'http://gateway.marvel.com/v1/public/characters?ts=';
  useEffect(() => {
    (async () => {
      const apiResponse = await getApi(gateway);
      setPersonagens(apiResponse);
    })();
  }, []);

  if(personagens){
    return (
      <>
        <Header/>
        <div className="container">
          {personagens.data.results.map((Component, key) => (
            <CardContainer data={Component} image={Component.thumbnail.path + "/landscape_incredible."+Component.thumbnail.extension} key={key} />
          ))}
        </div>
        </>
    );
  }
  else{
    return(
      <div>
        Home não carregada
      </div>
    )
  }
}

export default Home;
