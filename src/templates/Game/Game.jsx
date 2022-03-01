import CardGame from "../../components/CardGame/CardGame";
import { useMemo, useState } from "react";

import "./game.css";
import logoMini from "../../assets/logo-mini.png";

export default function Game({ changeSection, cards }) {
  const [actualCardNumber, setActualCardNumber] = useState(1);

  const [question, answer] = useMemo(() => cards[actualCardNumber - 1], [actualCardNumber]);

  return (
    <div className="de-game">
      <img src={logoMini} alt="logo" className="de-game__logo" />
      <CardGame actualCardNumber={actualCardNumber} cardsNumber={cards.length} question={question} answer={answer} />
    </div>
  );
}
