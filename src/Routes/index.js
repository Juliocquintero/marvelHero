import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DataContext from '../hoc/context/dataContext';
import HeroDetails from '../ui/views/Details';
import Header from '../ui/views/Header';
import Home from '../ui/views/Home';
const Routes = () => {
  const { contentViewed } = useContext(DataContext);
  const hasContent = Object.keys(contentViewed).length > 0;
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hero/:id">
          {hasContent ? <HeroDetails /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
