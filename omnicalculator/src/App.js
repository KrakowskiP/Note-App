import "./App.css";
import NoteList from "./NoteList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoteDetails from "./NoteDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="upperHeader">Notes App</div>
        <Switch>
          <Route exact path="/">
            <NoteList />
          </Route>
          <Route path="/note/:id">
            <NoteDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
