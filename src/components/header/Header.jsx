import "./Header.scss";
import icon from "../../assets/icons/search-icon-red-md.png";
import logo from "../../assets/images/marvelLogo.png"

export default function Header(props) {
  //const { content, src, alt, className, onClick } = props;

  return (
      <div className="header">
        <img src={logo} className="logo" alt=""></img>
        <div className="search">
          <img src={icon} className="icon" alt=""></img>
          <input className="input" type="text"></input>
        </div>
        
      </div>
  );
}