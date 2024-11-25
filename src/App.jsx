import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup className="page-content">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;