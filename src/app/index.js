import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/header';
import DataContext from '../hoc/context/dataContext';
import HeroDetails from '../pages/details';
import Home from '../pages/home';
import PageNotFound from '../pages/notFound';

export const home = '/marvelHero';
const App = () => {
  const { contentViewed } = useContext(DataContext);
  const hasContent = Object.keys(contentViewed).length > 0;
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={home} component={Home} />
        <Route path={`${home}/character/:id`}>
          {hasContent ? <HeroDetails /> : <Redirect to={home} />}
        </Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
