import './Header.scss';
import { Link } from 'react-router-dom';
import icon from '../../assets/icons/search-icon-red-md.png';
import logo from '../../assets/images/marvelLogo.png';
import getApi from '../../services/getApi';
import { useState } from 'react';

export default function Header(props) {
  const [filtro, setFiltro] = useState(false);

  async function VerInput() {
    if (document.getElementById('input').value.length > 0) {
      const gateway =
        'http://gateway.marvel.com/v1/public/characters?nameStartsWith=' +
        document.getElementById('input').value +
        '&ts=';
      const responseFiltro = await getApi(gateway);
      setFiltro(responseFiltro);
    } else {
      setFiltro(false);
    }
  }
  function MudarStyleFiltro() {
    const filtroStyle = document.querySelector('.filtro');
    if (document.querySelector('.check').checked) {
      if (filtroStyle) filtroStyle.style.display = 'none';
    } else {
      if (!filtroStyle) document.getElementById('input').focus();
    }
  }
  if (filtro && document.getElementById('input').value.length > 0) {
    return (
      <>
        <div className="header">
          <div className="Initial"></div>
          <div className="logoDiv">
            <Link to="/">
              <img src={logo} alt=""></img>
            </Link>
          </div>
          <div className="search">
            <label htmlFor="checkbox" onClick={MudarStyleFiltro}>
              <img src={icon} className="icon" alt=""></img>
              <div className="filtro">
                {filtro.data.results.map((storie, key) => (
                  <div className="filtroDiv" key={key}>
                    <Link
                      to={{
                        pathname: '/detail',
                        comics: storie.comics,
                        events: storie.events,
                        series: storie.series,
                        stories: storie.stories,
                        thumbnail: storie.thumbnail,
                        name: storie.name,
                        description: storie.description,
                      }}
                    >
                      <img
                        src={
                          storie.thumbnail.path +
                          '/standard_medium.' +
                          storie.thumbnail.extension
                        }
                        alt=""
                      ></img>
                      <h1 className="filtroText">{storie.name}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            </label>
            <div className="inputDiv">
              <input type="checkbox" className="check" id="checkbox"></input>
              <input
                className="input"
                type="text"
                id="input"
                onChange={VerInput}
              ></input>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="header">
        <div className="Initial"></div>
        <div className="logoDiv">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="search">
          <label htmlFor="checkbox" onClick={MudarStyleFiltro}>
            <img src={icon} className="icon" alt=""></img>
          </label>
          <div className="headerInput">
            <input type="checkbox" className="check" id="checkbox"></input>
            <input
              className="input"
              type="text"
              id="input"
              onChange={VerInput}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
