import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ListPosts } from '../pages/ListPosts';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/posts" exact component={ListPosts} />
      </Switch>
    </BrowserRouter>
  );
};
