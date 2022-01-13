import './App.css';
import ButtonAppBar from './ButtonAppBar';
import FormController from './FormController';
import EntryTitle from './EntryTitle';
import EntriesContainer from './EntriesContainer';
import { useState } from 'react';

function App() {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  function toggleSubmit() {
    setHasBeenSubmitted(!hasBeenSubmitted);
  }

  return (
    <div className="App">
      <ButtonAppBar />
      <EntryTitle />
      <FormController toggleSubmit={toggleSubmit} />
      <EntriesContainer hasBeenSubmitted={hasBeenSubmitted} />
    </div>
  );
}

export default App;
