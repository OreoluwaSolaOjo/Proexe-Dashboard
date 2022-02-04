import EditUser from "./pages/EditForm";
import Header from "./pages/Header";
import AddUser from "./pages/newUser";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/UserData";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/editUser/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
