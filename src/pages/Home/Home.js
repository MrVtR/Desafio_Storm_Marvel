import './Home.scss';
import { Header, CardContainer, Loading } from '../../components/index'
import getApi from "../../services/getApi";
import {useState, useEffect} from 'react'

function Home() {
  const [personagens,setPersonagens] = useState([]);
  //const [personagesMais,setPersonagensMais] = useState([]);
  const [contador,setContador] = useState(20);
  const gateway = 'http://gateway.marvel.com/v1/public/characters?ts=';

  useEffect(() => {
    (async () => {
      const apiResponse = await getApi(gateway);
      setPersonagens(arrayAntigo => [...arrayAntigo,apiResponse]);
    })();
  }, []);

async function CarregarMaisPersonagens(){
    setContador(contador+20);
    const gatewayCarregarMais='http://gateway.marvel.com/v1/public/characters?offset='+contador+'&ts=';
    const apiResponse = await getApi(gatewayCarregarMais);
    console.log("Total carregado:",apiResponse.data.limit+apiResponse.data.offset);
    setPersonagens(arrayAntigo => [...arrayAntigo,apiResponse]);
  }

  if(personagens){
    return (
      <>
        <Header/>
        <div className="container">
          {
            personagens.map((Component, key) => (
              Component.data.results.map((item, key) => (
                <CardContainer data={item} image={item.thumbnail.path + "/landscape_incredible."+item.thumbnail.extension} key={key} />
          ))))}

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
