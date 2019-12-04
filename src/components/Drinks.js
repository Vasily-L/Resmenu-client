import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
const Drinks = () => {
  const [CounterTuborg, SetTuborg] = useState(0);
  const [CounterGoldStar, SetGoldStar] = useState(0);
  const [CounterVodka, SetVodka] = useState(0);
  const [CounterJin, SetJin] = useState(0);

  const Check = name => {
    switch (name) {
      case 'Tuborg':
        if (CounterTuborg > 0) {
          SetTuborg(CounterTuborg - 1);
        }
        break;
      case 'GoldStar':
        if (CounterGoldStar > 0) {
          SetGoldStar(CounterGoldStar - 1);
        }
        break;
      case 'Vodka':
        if (CounterVodka > 0) {
          SetVodka(CounterVodka - 1);
        }
        break;
      case 'Jin':
        if (CounterJin > 0) {
          SetJin(CounterJin - 1);
        }
        break;
      default:
        return true;
    }
  };
  return (
    <div className='Drinks'>
      <header className='Main-Header'>Drinks menu</header>
      <main className='main'>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Tuborg Red
              <span className='Quantity'>25</span>
            </Card.Title>
            <Card.Text>
              <Button onClick={() => Check('Tuborg')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterTuborg}</span>
              <Button
                variant='warning'
                onClick={() => SetTuborg(CounterTuborg + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              GoldStar
              <span className='Quantity'>23</span>
            </Card.Title>
            <Card.Text>
              <Button onClick={() => Check('GoldStar')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterGoldStar}</span>
              <Button
                variant='warning'
                onClick={() => SetGoldStar(CounterGoldStar + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Absolute vodka
              <span className='Quantity'>82</span>
            </Card.Title>
            <Card.Text>
              <Button onClick={() => Check('Vodka')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterVodka}</span>
              <Button
                variant='warning'
                onClick={() => SetVodka(CounterVodka + 1)}
              >
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>
              Jin
              <span className='Quantity'>102</span>
            </Card.Title>
            <Card.Text>
              <Button onClick={() => Check('Jin')} variant='warning'>
                -
              </Button>
              <span className='Order'>{CounterJin}</span>
              <Button variant='warning' onClick={() => SetJin(CounterJin + 1)}>
                +
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
};
export default Drinks;
