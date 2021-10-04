import { useState } from "react";
import "./cardDeck.css";

const CardDeck = () => {
  const data = [
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "10H",
    "AH",
    "QH",
    "KH",
    "JH",
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "10C",
    "AC",
    "QC",
    "KC",
    "JC",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "10D",
    "AD",
    "QD",
    "KD",
    "JD",
    "2S",
    "3S",
    "4S",
    "5S",
    "6S",
    "7S",
    "8S",
    "9S",
    "10S",
    "AS",
    "QS",
    "KS",
    "JS",
  ];
  const [deck, setDeck] = useState(data);
  const [pickedCards, setPickedCards] = useState([]);
  const [error, setError] = useState(false);
  function shuffleCard(cards) {
    let tempDeck = cards;
    for (let i = 0; i < tempDeck.length; i++) {
      let tempCard = tempDeck[i];
      let randomIndex = Math.floor(Math.random() * tempDeck.length);
      tempDeck[i] = tempDeck[randomIndex];
      tempDeck[randomIndex] = tempCard;
    }
    return tempDeck;
  }

  function pickFive(cards) {
    let fiveCards = [];
    for (let i = 0; i < 5; i++) {
      let element = cards[Math.floor(Math.random() * cards.length)];
      fiveCards.push(element);
    }
    let leftOverCards = cards.filter((item) => !fiveCards.includes(item));
    return { fiveCards, leftOverCards };
  }

  function handleShuffle() {
    setDeck(data);
    let changedArr = shuffleCard([...deck]);
    setDeck(changedArr);
  }
  function handlePick() {
    if (deck.length < 5) {
      setError(true);
    } else {
      let { fiveCards, leftOverCards } = pickFive([...deck]);
      setPickedCards(fiveCards);
      setDeck(leftOverCards);
    }
  }

  return (
    <>
      <div className="cardContainer">
        {deck.map((item, i) => {
          return (
            <div key={i} className="card">
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
      {error && <p>No Cards Left to Pick</p>}
      <div className="pickedCardsContainer">
        {pickedCards.map((item, i) => {
          return (
            <div key={i} className="pickedCard">
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardDeck;
