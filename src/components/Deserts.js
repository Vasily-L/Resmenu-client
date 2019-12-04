import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Deserts = () => {
  const [CounterPancakes, SetPancakes] = useState(0);
  const [CounterVanilla, SetVanilla] = useState(0);
  const [CounterSouffle, SetSouffle] = useState(0);
  const [CounterChorus, SetChorus] = useState(0);

  const Check = name => {
    switch (name) {
      case 'Pancakes':
        if (CounterPancakes > 0) {
          SetPancakes(CounterPancakes - 1);
        }
        break;
      case 'Vanilla':
        if (CounterVanilla > 0) {
          SetVanilla(CounterVanilla - 1);
        }
        break;
      case 'Souffle':
        if (CounterSouffle > 0) {
          SetSouffle(CounterSouffle - 1);
        }
        break;
      case 'Chorus':
        if (CounterChorus > 0) {
          SetChorus(CounterChorus - 1);
        }
        break;
      default:
        return true;
    }
  };
  return (
    <div className='Deserts'>
      <header className='Main-Header'>Deserts menu</header>
      <main className='main'>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Pancakes
              <span className='Quantity'>40</span>
            </Card.Title>
            <Card.Text>
              3 big tasty pancakes with chocolate/maple syrup.
            </Card.Text>
            <Card.Text>
              <Button onClick={() => Check('Pancakes')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterPancakes}</span>
              <Button
                variant='warning'
                onClick={() => SetPancakes(CounterPancakes + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Vanilla ice cream
              <span className='Quantity'>12</span>
            </Card.Title>
            <Card.Text>2 balls of great american ice cream.</Card.Text>
            <Card.Text>
              <Button onClick={() => Check('Vanilla')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterVanilla}</span>
              <Button
                variant='warning'
                onClick={() => SetVanilla(CounterVanilla + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Chocolate Souffle
              <span className='Quantity'>49</span>
            </Card.Title>
            <Card.Text>
              Hot chocolate souffle comes with whipped cream.
            </Card.Text>
            <Card.Text>
              <Button onClick={() => Check('Souffle')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterSouffle}</span>
              <Button
                variant='warning'
                onClick={() => SetSouffle(CounterSouffle + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Chorus
              <span className='Quantity'>22</span>
            </Card.Title>
            <Card.Text>
              Three pieces coated with chocolate and candies.
            </Card.Text>
            <Card.Text>
              <Button onClick={() => Check('Chorus')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterChorus}</span>
              <Button
                variant='warning'
                onClick={() => SetChorus(CounterChorus + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
};
export default Deserts;
