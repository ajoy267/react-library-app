import BookList from './views/Books/BookList';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './views/Books/Home/Home';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <BrowserRouter>
        <h1>Library Catalog</h1>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/books">
            <header>
              <NavLink to="/" data-testid="/" exact>
                Back to Home Page
              </NavLink>
            </header>
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
