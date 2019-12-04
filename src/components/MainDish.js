import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const MainDish = () => {
  // useState
  const [CounterEntrecote, SetEntrecote] = useState(0);
  const [CounterPork, SetPork] = useState(0);
  const [CounterAries, SetAries] = useState(0);
  const [Counterkebab, Setkebab] = useState(0);
  // Functions
  const Check = name => {
    switch (name) {
      case 'Entrecote':
        if (CounterEntrecote > 0) {
          SetEntrecote(CounterEntrecote - 1);
        }
        break;
      case 'Pork':
        if (CounterPork > 0) {
          SetPork(CounterPork - 1);
        }
        break;
      case 'Aries':
        if (CounterAries > 0) {
          SetAries(CounterAries - 1);
        }
        break;
      case 'kebab':
        if (Counterkebab > 0) {
          Setkebab(Counterkebab - 1);
        }
        break;
      default:
        return true;
    }
  };
  return (
    <div className='MainDish'>
      <header className='Main-Header'>Main dish menu</header>
      <main className='main'>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Entrecote
              <span className='Quantity'>180</span>
            </Card.Title>
            <Card.Text>300 grams of fine beef.</Card.Text>
            <Card.Text>
              <Button onClick={() => Check('Entrecote')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterEntrecote}</span>
              <Button
                variant='warning'
                onClick={() => SetEntrecote(CounterEntrecote + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Pork chops
              <span className='Quantity'>68</span>
            </Card.Title>
            <Card.Text>Amazing pork with barbecue sauce.</Card.Text>
            <Card.Text>
              <Button onClick={() => Check('Pork')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterPork}</span>
              <Button
                variant='warning'
                onClick={() => SetPork(CounterPork + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Aries skewers
              <span className='Quantity'>99</span>
            </Card.Title>
            <Card.Text>Amazing skewers in garlic and tahini sauce.</Card.Text>
            <Card.Text>
              <Button onClick={() => Check('Aries')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterAries}</span>
              <Button
                variant='warning'
                onClick={() => SetAries(CounterAries + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Turkish kebab
              <span className='Quantity'>56</span>
            </Card.Title>
            <Card.Text>Kebab prepared by poor Turkish childrens.</Card.Text>
            <Card.Text>
              <Button onClick={() => Check('kebab')} variant='warning'>
                -
              </Button>
              <span className='Order'>{Counterkebab}</span>
              <Button
                variant='warning'
                onClick={() => Setkebab(Counterkebab + 1)}
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
export default MainDish;
