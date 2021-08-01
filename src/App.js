import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/Home";
import "./app.css";

import {
    BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

import Userlist from './pages/home/userlist/userlist';
function App() {

    return (
        <Router>
            <Topbar />

            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users">
                        <Userlist />
                    </Route>


                </Switch>

            </div>

        </Router>
    );


}

export default App