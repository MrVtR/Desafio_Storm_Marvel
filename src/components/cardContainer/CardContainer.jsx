import "./CardContainer.scss";
import {Link} from "react-router-dom";
export default function CardContainer(props) {
const {image} = props;
const {name,id,comics,events,series,stories,thumbnail,description} = props.data;
const newTo = { 
  pathname: "/detail", 
  id,
  comics,
  events,
  series,
  stories,
  thumbnail,
  name,
  description,
};
if(!UrlExists(image)){
  const imagemCerta = image.slice(0,image.length-3)+"gif";
  return (
    <div className="cardContainer">
      <Link to={newTo}>
        <img src={imagemCerta} alt="" className="image"></img>
      </Link>
      <div className="textoPersonagem">{name}</div>
    </div>
);
}
else{
  return (
    <div className="cardContainer">
      <Link to={newTo}>
        <img src={image} alt="" className="image"></img>
      </Link>
      <div className="textoPersonagem">{name}</div>
    </div>
    
);
}
}
function UrlExists(url) {
  var img = new Image();
  img.src = url;
  return img.height !== 0;
}