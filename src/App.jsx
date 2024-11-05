import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
