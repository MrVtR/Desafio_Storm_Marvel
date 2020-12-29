import './CharacterDetail.scss';
import getApi from "../../mocks/getApi";
import { Header } from '../../components/index'

function CharacterDetail(props) {
  const {name,id,comics,events,series,stories,thumbnail,description} = props.location;
  let i=0,j=0,k=0;

  const comicsMap = comics.items.map((comic) => 
    getApi(comic.resourceURI+"?ts="));
  const eventsMap = events.items.map((event) => 
    getApi(event.resourceURI+"?ts="));
  const seriesMap = series.items.map((serie) => 
    getApi(serie.resourceURI+"?ts="));
  //const storiesMap = comics.items.map((comic,key) => 
    //getApi(comic.resourceURI+"?ts="));

  comicsMap.forEach(element => {
    if(element==null)
      i++;
  });
  eventsMap.forEach(element => {
    if(element==null)
      j++;
  });
  seriesMap.forEach(element => {
    if(element==null)
      k++;
  });
  if(i==0 && j==0 && k==0)
  {
    console.log(stories);
    return (
      <>
      <Header/>
      <div className="Detail">
        <div className="character">
          <img src={thumbnail.path+"/landscape_incredible.jpg"} alt="" className="characterImage"/>
          <div className="nameDescription">
            <p className="cTitle">Name:</p>
              <p className="cComponent">{name}</p>
            <p className="cTitle">Description:</p>
              <p className="cComponent">{description}</p>
          </div>
        </div>
        <div className="title">Comics</div>
        <div className="Images">
          {comicsMap.map((comic, key) => (
              <img src={comic.data.results[0].thumbnail.path+".jpg"} key={key} alt="" width="350px" height="auto" className="comicImage"/>
          ))}
        </div>
        <div className="title">Series</div>
        <div className="Images">
          {seriesMap.map((serie, key) => (
            <>
              <h1 key={key}>{serie.data.results[0].title}</h1>
              <img src={serie.data.results[0].thumbnail.path+".jpg"} key={key} alt="" width="350px" height="auto" className="comicImage"/>
            </>
          ))}
        </div>
        <div className="title">Stories</div>
        <div className="title">Events</div>
        <div className="Images">
          {eventsMap.map((event, key) => (
              <img src={event.data.results[0].thumbnail.path+".jpg"} key={key} alt="" width="450px" height="auto" className="comicImage"/>
          ))}
        </div>
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

export default CharacterDetail;
