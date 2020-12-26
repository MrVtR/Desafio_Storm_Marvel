import "./Header.scss";
import logo from "../../assets/images/marvelLogo.png"

export default function Header(props) {
  //const { content, src, alt, className, onClick } = props;

  return (
      <div className="header">
        <img src={logo} alt=""></img>
      </div>
  );
}