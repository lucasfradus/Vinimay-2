import React    from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

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

  const trackingId = "G-ZWJ15Y3F1R"; 
  ReactGA.initialize(trackingId);

  const history = createBrowserHistory();
  // Initialize google analytics page view tracking
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  const [t] = useTranslation('common');

  return (
    <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Inicio}/>
            <Route exact path='/comunity' component={Comunity}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/privacy' component={Privacity}/>
            <Route exact path='/terms' component={Terms}/>
            <Route exact path='/video' component={Video}/>
            <Route component={NotFoundPage} />
        </Switch>
        <Follow translate={t}/>
        <Footer translate={t}/>
    </div>
  );
}

export default App;
