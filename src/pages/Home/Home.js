import './Home.scss';

import { Header, CardContainer } from '../../components/index'
import getApi from "../../mocks/getApi";

function Home() {
  const gateway = 'http://gateway.marvel.com/v1/public/characters?ts=';
  const personagens = getApi(gateway);

  if(personagens){
    console.log(personagens.data.results[0]);
    return (
      <>
        <Header/>
        <div className="container">
          {personagens.data.results.map((Component, key) => (
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
