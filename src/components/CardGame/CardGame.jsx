import turn from "../../assets/turn.png";
import { memo, useCallback, useMemo, useState } from "react";

import "./card-game.css";

export default function CardGame({ handleNextCard, actualCardNumber, cardsNumber, question, answer }) {
  const [seeAnswer, setSeeAnswer] = useState(false);
  const [actualUserAnswer, setActualUserAnswer] = useState("");
  const buttons = useMemo(
    () => [
      ["Aprendi agora", "black"],
      ["Não lembrei", "red"],
      ["Lembrei com esforço", "green"],
      ["Zap!", "yellow"],
    ],
    []
  );

  const resetCardAndGoToNext = useCallback(() => {
    setSeeAnswer(false);
    setActualUserAnswer("");
    handleNextCard(actualCardNumber, actualUserAnswer !== "red");
  }, [handleNextCard, actualCardNumber, actualUserAnswer]);

  const className = `de-card-game ${seeAnswer && "de-card-game--flipped"} ${
    actualUserAnswer && `de-card-game--${actualUserAnswer}`
  }`;

  return (
    <div className={className}>
      <div className="de-card-game__face de-card-game__front">
        <div className="de-card-game__header">
          <CounterMemo actualCardNumber={actualCardNumber} cardsNumber={cardsNumber} />
        </div>
        <div className="de-card-game__content">{question}</div>
        <div className="de-card-game__footer">
          <img src={turn} alt="turn" onClick={() => setSeeAnswer(true)} />
        </div>
      </div>
      <div className="de-card-game__face de-card-game__back">
        <div className="de-card-game__header">
          <div className="de-card-game__title">{question}</div>
          <CounterMemo actualCardNumber={actualCardNumber} cardsNumber={cardsNumber} />
        </div>
        <div className="de-card-game__content">{answer}</div>
        <div className="de-card-game__footer">
          {!actualUserAnswer &&
            buttons.map((button, index) => {
              const [buttonText, buttonColor] = button;
              const buttonClassName = `de-button de-card-game__button de-card-game__button-${buttonColor}`;

              return (
                <button onClick={() => setActualUserAnswer(buttonColor)} key={index} className={buttonClassName}>
                  {buttonText}
                </button>
              );
            })}
          {actualUserAnswer && <img src={turn} alt="turn" onClick={resetCardAndGoToNext} />}
        </div>
      </div>
    </div>
  );
}

function Counter({ actualCardNumber, cardsNumber }) {
  return (
    <div className="de-card-game__counter">
      {actualCardNumber}/{cardsNumber}
    </div>
  );
}

const CounterMemo = memo(Counter);
