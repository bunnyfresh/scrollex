import React from 'react';
import './App.css';
import  Header   from './components/Header';
import PlayArea from './components/PlayArea';
import PlayElement from './components/PlayElement';

const colors = {
  'red': '#ff0000',
  'green': '#00ff00',
  'blue': '#0000ff',
}
function App() {
  return (
    <div className="App">
      <Header />
      <PlayArea>
          <PlayElement begin={true} color={colors.red} />
      </PlayArea>
    </div>
  );
}

export default App;
