import './assets/css/app.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Login from './pages/Login';

function App() {
  return <Login />;
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
