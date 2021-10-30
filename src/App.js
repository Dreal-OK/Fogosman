import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import Bio from "./components/Pages/Bio/Bio";
import Events from "./components/Pages/Events/Events";
import Objectives from "./components/Pages/Objectives/Objectives";
import Contact from "./components/Pages/Contact/Contact";
import Boards from "./components/Pages/Boards/Boards";
import './App.css';
import Footer from "./components/Footer/Footer";


function App() {



  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home } />
          <Route path="/bio"  component={Bio } />
          <Route path="/events"  component={Events } />
          <Route path="/objectives"  component={Objectives } />
          <Route path="/contact" component={Contact} />
          <Route path='/board' component={Boards} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
 