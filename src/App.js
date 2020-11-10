import Home from "./pages/home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import MobileApp from "./pages/mobileApp";
import Layout from "./components/Layout";
function App() {
  return (

    <div>
      {/* <Header/> */}
      <Router>
      <Layout>

        <Switch>
          <Route path="/mobile">
            <MobileApp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Layout>

      </Router>
    </div>
  );
}

export default App;
