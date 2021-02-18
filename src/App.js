import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
