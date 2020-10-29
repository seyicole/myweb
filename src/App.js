import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Navbar from './Components/Navbar';
import {Route, Switch} from 'react-router-dom'; 


function App() {
  return (
    <>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/resume' component={Resume} />
    <Route exact path='/projects' component={Projects} />
    <Route component={Error} />
    </Switch>
    <Navbar/>
    </>
  );
}

export default App;
