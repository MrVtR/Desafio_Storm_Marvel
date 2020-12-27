import "./CardContainer.scss";

export default function CardContainer(props) {
const {color} = props;
 console.log(color);
  return (
      <div className="cardContainer" style={{backgroundColor: color}}>
        <div class="textoPersonagem">
          texto
        </div>
      </div>
      
  );
}