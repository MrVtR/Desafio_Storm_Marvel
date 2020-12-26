import "./Search.scss";
import icon from "../../assets/icons/search-icon-red-md.png";

export default function Header(props) {
  //const { content, src, alt, className, onClick } = props;

  return (
      <div className="search">
        <img src={icon} alt=""></img>
        <input type="text"></input>
      </div>
  );
}