import "./end.css";
import logoMini from "../../assets/logo-mini.png";

export default function End({ correctPercentage }) {
  const [correctTitle, correctSubtitle] = ["Parabéns 🥳", "Você não esqueceu de nenhum flashcard!"];

  const [incorrectTitle, incorrectSubtitle] = [
    "Putz... 😢",
    <>
      <p>Você esqueceu alguns flashcards...</p>
      <p>Não desanime! Na próxima você consegue!</p>{" "}
    </>,
  ];

  return (
    <div className="de-end">
      <img src={logoMini} alt="logo" className="de-end__logo" />
      <div className="de-end__container">
        <h1 className="de-end__title">{correctPercentage < 1 ? incorrectTitle : correctTitle}</h1>
        <h2 className="de-end__subtitle">{correctPercentage < 1 ? incorrectSubtitle : correctSubtitle}</h2>
      </div>
    </div>
  );
}
