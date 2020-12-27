import "./Search.scss";
import icon from "../../assets/icons/search-icon-red-md.png";
import logo from "../../assets/images/marvelLogo.png"

export default function Header(props) {
  //const { content, src, alt, className, onClick } = props;

  return (
      <div className="header">
        <img src={logo} className="logo" alt=""></img>
        <div className="search">
        <label for="checkbox">
          <img src={icon} className="icon" alt=""></img>
        </label>
        <input type="checkbox" id="checkbox"></input>
        <input className="input" type="text"></input>
        </div>
        
      </div>
  );
}