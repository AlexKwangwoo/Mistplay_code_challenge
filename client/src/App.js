import { Switch, Route } from "react-router-dom";
import Search from "./component/Search";
import Update from "./component/Update";
import Welcome from "./component/Welcome";
import "./App.css";

function App({ fileService }) {
  return (
    <div className="App">
      <Switch>
        (
        <>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/search">
            <Search fileService={fileService} />
          </Route>
          <Route exact path="/update">
            <Update fileService={fileService} />
          </Route>
        </>
        )
      </Switch>
    </div>
  );
}

export default App;
