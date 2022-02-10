


import {BrowserRouter, Switch, Route} from "react-router-dom";
import Characters from '../containers/Character';
import Favorites from '../containers/Favorites';
import Layout from '../components/Layaout';
import "../assets/styles/App.scss";

const  App=()=> (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/favorite" component={Favorites}/>
        <Route exact path="/" component={Characters}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
