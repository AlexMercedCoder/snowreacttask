import React, { useState, useEffect } from 'react';
import { useTaskStore } from './taskstore';
import { Switch, Route, Link } from 'react-router-dom';
import {
  Button,
  Container,
  FlexContainer,
  Card,
  Modal,
  Carousel,
} from './utility';
import './App.scss';

function App() {
  const { taskStore, runTask } = useTaskStore();

  const slides = [
    {
      img:
        'https://i.guim.co.uk/img/media/d9acfe25335f2e82acc88f45d5397e77ff38be7e/0_486_3600_2159/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8cbeb7462cfd7adc2b86acb5eea061cb',
      alt: 'first',
      click: () => console.log('Hello World'),
    },
    {
      img:
        'https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2020-03/English%20Lab%20Puppy%20%281%29_0.png',
      alt: 'second',
      click: () => console.log('Hello World'),
    },
    {
      img:
        'https://i.guim.co.uk/img/media/014bb12d1958d15765e172f92bcbfcc357f2f3a6/1053_1229_4191_2515/master/4191.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=013e33df2c23913fadf41e75fa9c854a',
      alt: 'third',
      click: () => console.log('Hello World'),
    },
  ];

  return (
    <div className="App">
      <h1>{taskStore.word}</h1>
      <button onClick={() => dispatch({ type: 'adios' })}>Click Me</button>
      <Container>
        <Carousel className="caro" slides={slides} />
        <FlexContainer>
          <Card>
            <h3>Hello World 1</h3>
            <Button
              label="Hello"
              customStyles={{ backgroundColor: 'red' }}
              onClick={() => alert('Hello World')}
            />
            <Modal open="open" close="close">
              <h1>Modal 1</h1>
            </Modal>
          </Card>
          <Card>
            <h3>Hello World 2</h3>
            <Button
              label="Hello"
              customStyles={{ backgroundColor: 'red' }}
              onClick={() => alert('Hello World')}
            />
            <Modal open="open" close="close">
              <h1>Modal 2 </h1>
            </Modal>
          </Card>
          <Card>
            <h3>Hello World 3</h3>
            <Button
              label="Hello"
              customStyles={{ backgroundColor: 'red' }}
              onClick={() => alert('Hello World')}
            />
            <Modal open="open" close="close">
              <h1>Modal 3</h1>
            </Modal>
          </Card>
        </FlexContainer>
        <Switch>
          <Route exact path="/" render={(rp) => <h1>Home</h1>} />
          <Route exact path="/other" render={(rp) => <h1>Other</h1>} />
          <Route exact path="/another" render={(rp) => <h1>Another</h1>} />
        </Switch>
        <Link to="/">
          <Button label="Home" />
        </Link>
        <Link to="/other">
          <Button label="Other" />
        </Link>
        <Link to="/another">
          <Button label="Another" />
        </Link>
      </Container>
    </div>
  );
}

export default App;
