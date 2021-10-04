import { useState, useEffect } from "react";
import "./cardDeck.css";

const CardDeck = () => {
  const [deck, setDeck] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  useEffect(() => {
    const name = ["H", "C", "D", "S"];
    const number = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "A",
      "Q",
      "K",
      "J",
    ];
    let deck = [];

    for (let i = 0; i < name.length; i++) {
      for (let j = 0; j < number.length; j++) {
        deck.push(number[j] + name[i]);
      }
    }
    setDeck(deck);
  }, []);

  function shuffleCard(cards) {
    let tempDeck = cards;
    for (let i = 0; i < tempDeck.length; i++) {
      let tempCard = tempDeck[i];
      let randomIndex = Math.floor(Math.random() * 52);
      tempDeck[i] = tempDeck[randomIndex];
      tempDeck[randomIndex] = tempCard;
    }
    return tempDeck;
  }

  function pickFive(cards) {
    let fiveCards = [];
    let leftOverCards = cards;
    for (let i = 0; i < 5; i++) {
      fiveCards.push(
        leftOverCards[Math.floor(Math.random() * leftOverCards.length)]
      );
    }
    leftOverCards = leftOverCards.filter((item) => !fiveCards.includes(item));
    return { fiveCards, leftOverCards };
  }
  function handleShuffle() {
    let changedArr = shuffleCard([...deck]);
    setDeck(changedArr);
  }
  function handlePick() {
    let { fiveCards, leftOverCards } = pickFive([...deck]);
    setPickedCards(fiveCards);
    setDeck(leftOverCards);
  }

  return (
    <>
      <div className="cardContainer">
        {deck.map((item) => {
          return (
            <div key={item} className="card">
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <button className="shuffleBtn" onClick={handleShuffle}>
        shuffle
      </button>
      <button className="shuffleBtn" onClick={handlePick}>
        Pick 5 cards
      </button>
      <div className="pickedCardsContainer">
        {pickedCards.map((item) => {
          return (
            <div key={item} className="pickedCard">
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardDeck;
