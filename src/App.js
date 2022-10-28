import {Route, Switch, BrowserRouter} from "react-router-dom"
import Home from "./screens/Home/Home";
import Analytics from "./screens/Analytics/Analytics";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route path="/analytic" component = {Analytics}/>
        <Route component={Error}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
