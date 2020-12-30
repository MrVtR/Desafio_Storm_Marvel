import './CharacterDetail.scss';
import getApi from "../../services/getApi";
import { Header,Loading } from '../../components/index'
import { useState,useEffect } from 'react';

function CharacterDetail(props,location) {
const {name,comics,events,series,stories,thumbnail,description} = props.location;
const [comicsData, setComicsData]=useState([]);
const [eventsData, setEventsData]=useState([]);
const [seriesData, setSeriesData]=useState([]);
const [storiesData, setStoriesData]=useState([]);
const [loading, setLoading]=useState(true);

useEffect(() => {
  (async () =>{
    const comicsMap = await Promise.all(comics.items.map(async (comic,key) => 
      await getApi(comic.resourceURI+"?ts=")
    ));
    
    const eventsMap = await Promise.all(events.items.map(async (event,key) => 
      await getApi(event.resourceURI+"?ts=")));

    const seriesMap = await Promise.all(series.items.map(async (serie,key) => 
      await getApi(serie.resourceURI+"?ts=")));

    const storiesMap = await Promise.all(stories.items.map(async (storie,key) => 
      await getApi(storie.resourceURI+"?ts=")));

      setLoading(false);
      console.log(storiesMap);
      setComicsData(comicsMap);
      setEventsData(eventsMap);
      setSeriesData(seriesMap);
      setStoriesData(storiesMap);
  })()
}, [comics.items,events.items,series.items,stories.items])
if(loading)
{
  console.log("Carregando");
  return(
    <Loading/>
  )
}
  
else
{
  console.log("Carregou");
  return (
    <>
    <Header/>
    <div className="Detail">
      <div className="character">
        <img src={thumbnail.path+".jpg"} alt="" className="characterImage"/>
        <div className="nameDescription">
          <p className="cTitle">Name:</p>
            <p className="cComponent">{name}</p>
          <p className="cTitle">Description:</p>
            <p className="cComponent">{description}</p>
        </div>
      </div>
      <div className="title">Comics</div>
      <div className="Images" width="400px">

        {comicsData.map((comic, key) => (
          [
            <figure key={key}>
              <img src={comic.data.results[0].thumbnail.path+".jpg"} alt="" width="350px" height="auto" className="comicImage"/>
              <figcaption><h1 className="comicTitle">{comic.data.results[0].title}</h1></figcaption>
            </figure>
          ]
        ))}
      </div>
      <div className="title">Series</div>
      <div className="Images">
        {seriesData.map((serie, key) => ([
          <figure key={key}>
            <img src={serie.data.results[0].thumbnail.path+".jpg"} alt="" width="350px" height="350px" className="comicImage"/>
            <figcaption><h1 className="comicTitle">{serie.data.results[0].title}</h1></figcaption>
          </figure>
        ]))}
      </div>
      <div className="title">Stories</div>
      <div className="Images">
        {storiesData.map((storie, key) => (
          storie && ( 
          <figure key={key}>
            {storie.data.results[0].thumbnail?.path && <img src={storie.data.results[0].thumbnail.path+".jpg"} alt="" width="350px" height="350px" className="comicImage"/>}
            <figcaption><h1 className="comicTitle">{storie.data.results[0].title}</h1></figcaption>
          </figure>
          )
        ))}
      </div>

      <div className="title">Events</div>
      <div className="Images">
        {eventsData.map((event, key) => (
          [
            <figure key={key}>
              <img src={event.data.results[0].thumbnail.path+".jpg"} alt="" width="350px" height="auto" className="comicImage"/>
              <figcaption><h1 className="comicTitle">{event.data.results[0].title}</h1></figcaption>
            </figure>
          ]
        ))}
      </div>
    </div>
    </>
  );
}
   
  }

export default CharacterDetail;
