import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import NotFound from './components/notFound';
import MoviesForm from './components/movieForm';
import Customers from './components/customer';
import Rentals from './components/rentals';
import NavBar from './components/navBar';
import LoginForm from './components/login';
import Register from './components/register';


function App() {
  return (
    <React.Fragment>
    < NavBar />
    <main className="container"> 
   <Switch>
   <Route path="/movies/:id"  component={MoviesForm} />
   <Route path="/login"  component={LoginForm} />
   <Route path="/movies" component={Movies} />
   <Route path="/rentals" component={Rentals} />
   <Route path="/customers" component={Customers} />
   <Route path="/not-found" component={NotFound} />
   <Route path="/register"  component={Register}/>
   <Redirect from="/" exact to="/movies" />
   <Redirect to="/not-found" />
   </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
