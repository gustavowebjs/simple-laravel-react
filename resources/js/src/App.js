import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: colunm;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;

const Heading = styled.h1`
  font-weight: bold;
  color: #666;
  padding: 10px;
`;

function App() {
  return (
    <Container>
      <Heading>Simple Laravel React Boilerplate</Heading>
    </Container>
  );
}

export default App;

if (document.getElementById('example')) {
  ReactDOM.render(<App />, document.getElementById('example'));
}
