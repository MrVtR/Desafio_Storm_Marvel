import './CardContainer.scss';
import { Link } from 'react-router-dom';
export default function CardContainer(props) {
  const { image } = props;
  const {
    name,
    id,
    comics,
    events,
    series,
    stories,
    thumbnail,
    description,
  } = props.data;
  const newTo = {
    pathname: '/detail',
    id,
    comics,
    events,
    series,
    stories,
    thumbnail,
    name,
    description,
  };
  return (
    <div className="cardContainer">
      <Link to={newTo}>
        <img src={image} alt="" className="image"></img>
      </Link>
      <div className="textoPersonagem">{name}</div>
    </div>
  );
}
