import React from 'react';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { SecondPage } from './pages/SecondPage';
import { ThirdPage } from './pages/ThirdPage';
import { FeedBack } from './pages/FeedBack';
import { Links } from './pages/Links';
import { Questions } from './pages/Questions';

function App() {
  return (
    <>
    <Header/>
     <Home/>
     <SecondPage/>
     <ThirdPage/>
     <FeedBack/>
     <Links/>
     <Questions/>
    </>
    
  );
}

export default App;
