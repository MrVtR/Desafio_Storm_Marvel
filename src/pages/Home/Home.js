import './Home.scss';
import { Header, CardContainer, Loading } from '../../services/index';
import getApi from '../../services/getApi';
import { useState, useEffect } from 'react';

function Home() {
  const [personagens, setPersonagens] = useState([]);
  const [contador, setContador] = useState(20);
  const gateway = 'https://gateway.marvel.com/v1/public/characters?ts=';
  let arrayMasterIndex;

  useEffect(() => {
    (async () => {
      const apiResponse = await getApi(gateway);
      setPersonagens((arrayAntigo) => [...arrayAntigo, apiResponse]);
    })();
  }, []);

  async function CarregarMaisPersonagens(arrayMasterIndex) {
    const jump = arrayMasterIndex + 1;
    setContador(contador + 20);
    const gatewayCarregarMais =
      'https://gateway.marvel.com/v1/public/characters?offset=' +
      contador +
      '&ts=';
    const apiResponse = await getApi(gatewayCarregarMais);
    setPersonagens((arrayAntigo) => [...arrayAntigo, apiResponse]);
    document.getElementById(jump).scrollIntoView();
  }

  if (personagens) {
    return (
      <>
        <Header />
        {personagens.map((Component, arrayMasterKey) => [
          (arrayMasterIndex = arrayMasterKey),
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
            onClick={() => CarregarMaisPersonagens(arrayMasterIndex)}
          />
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Home;
