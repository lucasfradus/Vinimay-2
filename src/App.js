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
import Modal from './Components/Modal';



function App() {

  return (
    <div className="App">
        <NavBar/>

        <Switch>
            <Route exact path='/' component={Inicio}/>
            <Route exact path='/comunidad' component={Comunity}/>
            <Route exact path='/contacto' component={Contact}/>
            <Route exact path='/privacidad' component={Privacity}/>
            <Route exact path='/condiciones' component={Terms}/>
            <Route exact path='/video' component={Video}/>
            <Route component={NotFoundPage} />

        </Switch>
        <Follow/>
        <Footer/>
    </div>
  );
}

export default App;
