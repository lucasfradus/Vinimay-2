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
import Potrero from './Pages/Potrero';
import Team from './Pages/Team';
import Faq from './Pages/Faq';
import Ads from './Pages/Ads';


import {useTranslation} from "react-i18next";


function App() {

  const [t] = useTranslation('common');

  return (
    <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Inicio} />
            <Route exact path='/comunity' component={Comunity}/>
            <Route exact path='/team' component={Team}/>
            <Route exact path='/faq' component={Faq}/>
            <Route exact path='/ads' component={Ads}/>

            <Route exact path='/contact' component={Contact} />
            <Route exact path='/privacy' component={Privacity} />
            <Route exact path='/terms' component={Terms} />
            <Route exact path='/video' component={Video} />
            <Route exact path='/potrero' component={Potrero}/>

            <Route component={NotFoundPage} />
        </Switch>
        <Follow translate={t}/>
        <Footer translate={t}/>
    </div>
  );
}

export default App;
