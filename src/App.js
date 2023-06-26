import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Home2 from './components/Home2';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NewList from './components/NewList';
import Hooks from './components/Hooks';
import Hoc from './components/Hoc'
import Todo from './components/Todo';
import Favcolor from './components/Favcolor';
import Effect from './components/Effect';
import Context1 from './components/Context1';
import Refex from './components/Refex';
import Reduce from './components/Reduce';
import useCallBack from './components/useCallBack';
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Home" Component={Home} />
          <Route exact path="/Home2" Component={Home2} />
          <Route exact path="/EventBind" Component={EventBind} />
          <Route exact path='/ParentComponent' Component={ParentComponent} />
          <Route exact path='/UserGreeting' Component={UserGreeting} />
          <Route exact path='/NewList' Component={NewList} />
          <Route exact path='/Hoc' Component={Hoc} />
          <Route exact path='/Todo' Component={Todo} />
          <Route exact path="/Hooks" Component={Hooks}>
            <Route exact path='Favcolor' Component={Favcolor} />
            <Route exact path='Effect' Component={Effect} />
            <Route exact path='Context1' Component={Context1} />
            <Route exact path='Refex' Component={Refex} />
            <Route exact path='Reduce' Component={Reduce} />
            <Route exact path='useCallBack' Component={useCallBack} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
