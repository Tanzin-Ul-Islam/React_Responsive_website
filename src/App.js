import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import { Blogs } from './components/pages/Blogs';
import { BlogDetails } from './components/pages/BlogDetails';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs-details/:id" component={BlogDetails} />
          <Route exact path="/sign-Up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
