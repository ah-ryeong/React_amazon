import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* 큰 고리 안에 작은 고리들이 있고, 큰 고리를 Router, Route를 이동시키는 매개체를 Switch, 고리를 Route라고 생각 */}
      <div className="App">
        {/* 매개체 */}
        <Switch>

          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
