import './Home.scss';
import { Header, CardContainer, Loading } from '../../services/index';
import getApi from '../../services/getApi';
import { useState, useEffect } from 'react';

function Home() {
  const [personagens, setPersonagens] = useState([]);
  const [contador, setContador] = useState(20);
  const gateway = 'http://gateway.marvel.com/v1/public/characters?ts=';
  let arrayMaster;

  useEffect(() => {
    (async () => {
      const apiResponse = await getApi(gateway);
      setPersonagens((arrayAntigo) => [...arrayAntigo, apiResponse]);
    })();
  }, []);

  async function CarregarMaisPersonagens(arrayMaster) {
    const jump = arrayMaster + 1;
    setContador(contador + 20);
    const gatewayCarregarMais =
      'http://gateway.marvel.com/v1/public/characters?offset=' +
      contador +
      '&ts=';
    const apiResponse = await getApi(gatewayCarregarMais);
    console.log(
      'Total de heróis carregado:',
      apiResponse.data.limit + apiResponse.data.offset,
    );
    setPersonagens((arrayAntigo) => [...arrayAntigo, apiResponse]);
    console.log('Indice de jump:', jump);
    document.getElementById(jump).scrollIntoView();
  }

  if (personagens) {
    console.log(personagens);
    return (
      <>
        <Header />
        {personagens.map((Component, arrayMasterKey) => [
          (arrayMaster = arrayMasterKey),
          <div id={arrayMasterKey} className="container" key={arrayMasterKey}>
            {Component.data.results.map((item, itemKey) => (
              <CardContainer
                data={item}
                image={item.thumbnail.path + '.' + item.thumbnail.extension}
                key={itemKey}
              />
            ))}
          </div>,
        ])}

        <div className="carregarMais">
          <input
            type="button"
            className="buttonApi"
            value="Carregar Mais"
            onClick={() => CarregarMaisPersonagens(arrayMaster)}
          />
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Home;
