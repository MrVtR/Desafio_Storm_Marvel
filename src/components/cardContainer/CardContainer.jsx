import "./CardContainer.scss";

export default function CardContainer(props) {
const {image, name} = props;
  return (
      <div className="cardContainer">
        <img src={image} alt="" className="image"></img>
        <div className="textoPersonagem">{name}</div>
      </div>
      
  );
}