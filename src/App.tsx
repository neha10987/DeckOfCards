import * as React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as cardFont from 'react-icons/all';

interface Suits {
  index: number;
  name: string;
  icon: string;
}
interface CardValues {
  index: number;
  name: string;
}
interface Card {
  Value: CardValues;
  Suit: Suits;
}

export default function App() {
  const suits = [
    { index: 0, name: 'Club', icon: 'GiClubs' },
    { index: 1, name: 'Spades', icon: 'GiSpades' },
    { index: 2, name: 'Heart', icon: 'GiHearts' },
    { index: 3, name: 'Diamonds', icon: 'GiDiamonds' },
  ];

  const values = [
    { index: 1, name: '2' },
    { index: 2, name: '3' },
    { index: 3, name: '4' },
    { index: 4, name: '5' },
    { index: 5, name: '6' },
    { index: 6, name: '7' },
    { index: 7, name: '8' },
    { index: 8, name: '9' },
    { index: 9, name: '10' },
    { index: 10, name: 'J' },
    { index: 11, name: 'Q' },
    { index: 12, name: 'K' },
    { index: 13, name: 'A' },
  ];

  const [deck, setDeck] = React.useState([]);
  const [cardCount, setCardCount] = React.useState(0);
  const [removedCards, setRemovedCards] = React.useState([]);

  // create a deck of cards
  React.useEffect(() => {
    let localDeck: Card[] = [];
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card: Card = { Value: values[x], Suit: suits[i] };
        localDeck.push(card);
      }
    }
    setDeck(localDeck);
  }, []);

  // shuffle the cards
  const shuffleDeck = () => {
    let localDeck: Card[] = [...deck];
    for (let i = localDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp: Card = localDeck[i];
      localDeck[i] = localDeck[j];
      localDeck[j] = temp;
    }
    setDeck(localDeck);
  };

  const restoreDeck = () => {
    let localDeck: Card[] = [];
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card: Card = { Value: values[x], Suit: suits[i] };
        localDeck.push(card);
      }
    }
    setDeck(localDeck);
    setRemovedCards([]);
  };

  const removeCards = () => {
    let localDeck = [...deck];
    let rCard = localDeck.splice(0, cardCount);
    setRemovedCards([...rCard, ...removedCards]);
    setDeck(localDeck);
  };

  const sortCards = () => {
    let rCards = removedCards;
    rCards.sort((a: any, b: any) => {
      return a.Suit.index - b.Suit.index || a.Value.index - b.Value.index;
    });
    setRemovedCards([...rCards]);
  };

  const setMyCount = (e) => {
    setCardCount(e.target.value);
  };

  return (
    <div>
      <h1>Deck of Cards</h1>

      <button className="btn btn-success" onClick={shuffleDeck}>
        Shuffle Deck
      </button>
      <button className="btn btn-success" onClick={restoreDeck}>
        Restore Deck
      </button>
      <button className="btn btn-success" onClick={removeCards}>
        Remove Cards
      </button>
      <input
        type="text"
        className="form-control mb-4 my-textbox"
        placeholder="Enter number of cards to be removed"
        value={cardCount}
        onChange={setMyCount}
      />
      <button className="btn btn-success" onClick={sortCards}>
        Sort removed Cards
      </button>

      <div>
        <div className="card-div">
          {deck.map((cards) => {
            return (
              <div className="card text-center" key={cards.index}>
                <strong
                  className={
                    cards.Suit.icon.includes('Club') ||
                    cards.Suit.icon.includes('Spade')
                      ? 'black-icon'
                      : 'red-icon'
                  }
                >
                  {cards.Suit.icon.includes('Club') ? (
                    <cardFont.GiClubs />
                  ) : cards.Suit.icon.includes('Heart') ? (
                    <cardFont.GiHearts />
                  ) : cards.Suit.icon.includes('Spade') ? (
                    <cardFont.GiSpades />
                  ) : (
                    <cardFont.GiDiamonds />
                  )}
                </strong>
                <div>{cards.Value.name}</div>
              </div>
            );
          })}

          <hr />
          <h2>Removed Cards</h2>
          {removedCards.map((cards) => {
            return (
              <div className="card text-center">
                <strong
                  className={
                    cards.Suit.icon.includes('Club') ||
                    cards.Suit.icon.includes('Spade')
                      ? 'black-icon'
                      : 'red-icon'
                  }
                >
                  {cards.Suit.icon.includes('Club') ? (
                    <cardFont.GiClubs />
                  ) : cards.Suit.icon.includes('Heart') ? (
                    <cardFont.GiHearts />
                  ) : cards.Suit.icon.includes('Spade') ? (
                    <cardFont.GiSpades />
                  ) : (
                    <cardFont.GiDiamonds />
                  )}
                </strong>
                <div>{cards.Value.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
