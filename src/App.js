import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <button onToggle={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
