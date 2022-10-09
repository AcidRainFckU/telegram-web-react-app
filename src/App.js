import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Form from './components/Form';

import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
