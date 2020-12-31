import './Home.scss';
import { Header, CardContainer, Loading } from '../../components/index'
import getApi from "../../services/getApi";
import {useState, useEffect} from 'react'

function Home() {
  const [personagens,setPersonagens] = useState(false);
  const [personagesMais,setPersonagensMais] = useState([]);
  const [contador,setContador] = useState(20);
  const gateway = 'http://gateway.marvel.com/v1/public/characters?ts=';

  useEffect(() => {
    (async () => {
      const apiResponse = await getApi(gateway);
      setPersonagens(apiResponse);
    })();
  }, []);

async function CarregarMaisPersonagens(){
    setContador(contador+20);
    const gatewayCarregarMais='http://gateway.marvel.com/v1/public/characters?offset='+contador+'&ts=';
    const apiResponse = await getApi(gatewayCarregarMais);
    setPersonagensMais(arrayAntigo => [...arrayAntigo,apiResponse]);
  }

  if(personagens){
    return (
      <>
        <Header/>
        <div className="container">
          {personagens.data.results.map((Component, key) => (
            <CardContainer data={Component} image={Component.thumbnail.path + "/landscape_incredible."+Component.thumbnail.extension} key={key} />
          ))}
          {personagesMais?
            personagesMais.map((Component, key) => (
              Component.data.results.map((item, key) => (
                <CardContainer data={item} image={item.thumbnail.path + "/landscape_incredible."+item.thumbnail.extension} key={key} />
              ))
          )):<></>}

        </div>
        <div className="carregarMais">
          <input type="button" className="buttonApi" value="Carregar Mais" onClick={CarregarMaisPersonagens}/>
        </div>
        </>
    );
  }
  else{
    return(
      <Loading/>
    )
  }
}

export default Home;
