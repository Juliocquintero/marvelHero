import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import HeroDetails from '../pages/details';
import Home from '../pages/home';
import PageNotFound from '../pages/notFound';

export const home = '/marvelHero';
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/character/:id">
          <HeroDetails />
        </Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
