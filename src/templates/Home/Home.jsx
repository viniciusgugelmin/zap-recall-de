import "./home.css";
import logoImage from "../../assets/logo.png";
import arrowImage from "../../assets/next.png";

export default function Home({ changeSection, gameOptions }) {
  return (
    <div className="de-home">
      <img className="de-home__logo" src={logoImage} alt="logo" />
      <div className="de-home__buttons">
        {gameOptions.map((option, index) => (
          <button key={index} className="de-button de-home__button" onClick={() => changeSection("game", option.name)}>
            Praticar {option.name}
            <img src={arrowImage} alt="arrow" className="de-home__arrow" />
          </button>
        ))}
      </div>
    </div>
  );
}
