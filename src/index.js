import ReactDOM from "react-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import Home from "./templates/Home/Home";
import Game from "./templates/Game/Game";

import "./styles.css";
import Page from "./templates/Page/Page";
import End from "./templates/End/End";

function App() {
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState("home");
  const [cards, setCards] = useState([]);
  const [correctPercentage, setCorrectPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const gameOptions = useMemo(
    () => [
      {
        name: "React",
        cards: [
          ["O que é JSX?", "Uma extensão de linguagem do JavaScript"],
          ["O React é __ ", "uma biblioteca JavaScript para construção de interfaces"],
          ["Componentes devem iniciar com __", "letra maiúscula"],
          ["Podemos colocar __ dentro do JSX", "expressões"],
          ["O ReactDOM nos ajuda __", "interagindo com a DOM para colocar componentes React na mesma"],
          ["Usamos o npm para __", "gerenciar os pacotes necessários e suas dependências"],
          ["Usamos props para __", "passar diferentes informações para componentes"],
          [
            "Usamos estado (state) para __",
            "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
          ],
        ],
      },
    ],
    []
  );

  const handleSectionChange = useCallback(
    (section, game = null, correctAnswers = 0) => {
      const sections = ["home", "game", "end"];

      if (!sections.includes(section)) {
        setSection("home");
        return;
      }

      if (section === "game") {
        setCards(gameOptions.find((gameOption) => gameOption.name === game).cards);
      }

      if (section === "end") {
        setCorrectPercentage((correctAnswers / cards.length) * 100);
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }

      setSection(section);
    },
    [gameOptions, cards]
  );

  return (
    <>
      <Page loading={loading}>
        {section === "home" && <Home changeSection={handleSectionChange} gameOptions={gameOptions} />}
        {section === "game" && <Game changeSection={handleSectionChange} cards={cards} />}
        {section === "end" && <End correctPercentage={correctPercentage} />}
      </Page>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
