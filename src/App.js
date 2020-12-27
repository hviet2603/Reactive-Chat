import './App.css';
import Header from './containers/Header/Header';
import MainApp from './Layouts/Main-App/MainApp';
import AuthPage from './Layouts/Auth/AuthPage/AuthPage';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

const App = props => {
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/" exact component={MainApp} />
      </Switch>
    </div>
  );
}

/*const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}*/

//export default connect(mapStateToProps,null)(App);

export default App;


// #61dafb React blue