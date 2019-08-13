import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './routes/Home/Home';
import Bio from './routes/Bio/Bio';
import Calendar from './routes/Calendar/Calendar';
import AV from './routes/AV/AV';
import Photos from './routes/Photos/Photos';
import Rep from './routes/Rep/Rep';
import Contact from './routes/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/Bio" component={Bio} />
            <Route path="/Calendar" component={Calendar} />
            <Route path="/AV" component={AV} />
            <Route path="/Rep" component={Rep} />
            <Route path="/Photos" component={Photos} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
