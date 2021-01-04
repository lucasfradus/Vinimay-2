import React    from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';


import Follow from './Components/Follow'
import Inicio from './Pages/Inicio';
import Comunity from './Pages/Comunity';
import Contact from './Pages/Contact';
import Terms from './Pages/Terms';
import Privacity from './Pages/Privacity';
import NotFoundPage from './Pages/NotFoundPage';
import Video from './Pages/Video';
import {useTranslation} from "react-i18next";


function App() {

  const [t] = useTranslation('common');

  return (
    <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Inicio} title="Vinimay App"/>
            <Route exact path='/comunity' component={Comunity} title="Vinimay App"/>
            <Route exact path='/contact' component={Contact} title="Vinimay App"/>
            <Route exact path='/privacy' component={Privacity} title="Vinimay App"/>
            <Route exact path='/terms' component={Terms} title="Vinimay App"/>
            <Route exact path='/video' component={Video} title="Vinimay App"/>
            <Route component={NotFoundPage} />
        </Switch>
        <Follow translate={t}/>
        <Footer translate={t}/>
    </div>
  );
}

export default App;
