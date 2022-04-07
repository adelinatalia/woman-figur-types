import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RoutesNav from './RoutesNav';
import './style/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <RoutesNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
