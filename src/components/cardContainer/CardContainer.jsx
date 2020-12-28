import "./CardContainer.scss";
import {BrowserRouter as Router,Link} from "react-router-dom";
export default function CardContainer(props) {
const {image, name,id} = props;
const newTo = { 
  pathname: "/detail", 
  id: id
};


if(!UrlExists(image)){
  const imagemCerta = image.slice(0,image.length-3)+"gif";
  return (
    <div className="cardContainer">
      <img src={imagemCerta} alt="" className="image"></img>
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