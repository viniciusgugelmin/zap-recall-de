import CardGame from "../../components/CardGame/CardGame";
import { useCallback, useMemo, useState } from "react";

import "./game.css";
import logoMini from "../../assets/logo-mini.png";

export default function Game({ changeSection, cards }) {
  const [actualCardNumber, setActualCardNumber] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleNextCard = useCallback(
    (actualCardNumber, correctAnswer) => {
      const actualCorrectAnswers = correctAnswer ? correctAnswers + 1 : correctAnswers;
      setCorrectAnswers(actualCorrectAnswers);

      if (actualCardNumber === cards.length) {
        changeSection("end", null, actualCorrectAnswers);
        return;
      }

      setActualCardNumber(actualCardNumber + 1);
    },
    [cards, changeSection, correctAnswers]
  );

  const [question, answer] = useMemo(() => cards[actualCardNumber - 1], [actualCardNumber, cards]);

  return (
    <div className="de-game">
      <img src={logoMini} alt="logo" className="de-game__logo" />
      <CardGame
        handleNextCard={handleNextCard}
        actualCardNumber={actualCardNumber}
        cardsNumber={cards.length}
        question={question}
        answer={answer}
      />
    </div>
  );
}
