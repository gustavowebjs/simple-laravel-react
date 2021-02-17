import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Simple Laravel React Boilerplate</h1>
    </div>
  );
}

export default App;

if (document.getElementById('example')) {
  ReactDOM.render(<App />, document.getElementById('example'));
}
