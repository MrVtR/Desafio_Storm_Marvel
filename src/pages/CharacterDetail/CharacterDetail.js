import './CharacterDetail.scss';
import getApi from '../../services/getApi';
import { Header, Loading } from '../../services/index';
import { useState, useEffect } from 'react';

function CharacterDetail(props) {
  const {
    name,
    comics,
    events,
    series,
    stories,
    thumbnail,
    description,
  } = props.location;
  const [comicsData, setComicsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [storiesData, setStoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const comicsMap = await Promise.all(
        comics.items.map(
          async (comic) => await getApi(comic.resourceURI + '?ts='),
        ),
      );
      const eventsMap = await Promise.all(
        events.items.map(
          async (event) => await getApi(event.resourceURI + '?ts='),
        ),
      );
      const seriesMap = await Promise.all(
        series.items.map(
          async (serie) => await getApi(serie.resourceURI + '?ts='),
        ),
      );
      const storiesMap = await Promise.all(
        stories.items.map(
          async (storie) => await getApi(storie.resourceURI + '?ts='),
        ),
      );
      setLoading(false);
      setComicsData(comicsMap);
      setEventsData(eventsMap);
      setSeriesData(seriesMap);
      setStoriesData(storiesMap);
    })();
  }, [comics.items, events.items, series.items, stories.items]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Header />
        <div className="Detail">
          <div className="character">
            <img
              src={thumbnail.path + '.' + thumbnail.extension}
              alt=""
              className="characterImage"
            />
            <div className="nameDescription">
              <p className="cTitle">Name:</p>
              <p className="cComponent">{name}</p>
              <p className="cTitle">Description:</p>
              {description ? (
                <p className="cComponent">{description}</p>
              ) : (
                <p className="cComponent">Description not available</p>
              )}
            </div>
          </div>

          <div className="title">Comics</div>
          {comicsData.length > 0 ? (
            <div className="Images" width="400px">
              {comicsData.map((comic, key) => [
                <figure key={key}>
                  <img
                    src={comic.data.results[0].thumbnail.path + '.jpg'}
                    alt=""
                    width="350px"
                    height="auto"
                    className="comicImage"
                  />
                  <figcaption>
                    <h1 className="comicTitle">
                      {comic.data.results[0].title}
                    </h1>
                  </figcaption>
                </figure>,
              ])}
            </div>
          ) : (
            <div className="notAvailable">Comics not available</div>
          )}

          <div className="title">Series</div>
          {seriesData.length > 0 ? (
            <div className="Images">
              {seriesData.map((serie, key) => [
                <figure key={key}>
                  <img
                    src={serie.data.results[0].thumbnail.path + '.jpg'}
                    alt=""
                    width="350px"
                    height="350px"
                    className="comicImage"
                  />
                  <figcaption>
                    <h1 className="comicTitle">
                      {serie.data.results[0].title}
                    </h1>
                  </figcaption>
                </figure>,
              ])}
            </div>
          ) : (
            <div className="notAvailable">Series not available</div>
          )}

          <div className="title">Stories</div>
          {storiesData.length > 0 ? (
            <div className="Images">
              {storiesData.map(
                (storie, key) =>
                  storie && (
                    <figure key={key}>
                      {storie.data.results[0].thumbnail?.path && (
                        <img
                          src={storie.data.results[0].thumbnail.path + '.jpg'}
                          alt=""
                          width="350px"
                          height="350px"
                          className="comicImage"
                        />
                      )}
                      <figcaption>
                        <h1 className="comicTitle">
                          {storie.data.results[0].title}
                        </h1>
                      </figcaption>
                    </figure>
                  ),
              )}
            </div>
          ) : (
            <div className="notAvailable">Stories not available</div>
          )}

          <div className="title">Events</div>
          {eventsData.length > 0 ? (
            <div className="Images">
              {eventsData.map((event, key) => [
                <figure key={key}>
                  <img
                    src={event.data.results[0].thumbnail.path + '.jpg'}
                    alt=""
                    width="350px"
                    height="auto"
                    className="comicImage"
                  />
                  <figcaption>
                    <h1 className="comicTitle">
                      {event.data.results[0].title}
                    </h1>
                  </figcaption>
                </figure>,
              ])}
            </div>
          ) : (
            <div className="notAvailable">Events not available</div>
          )}
        </div>
      </>
    );
  }
}

export default CharacterDetail;
