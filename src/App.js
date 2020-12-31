import './App.css';
import Header from './containers/Header/Header';
import MainApp from './Layouts/Main-App/MainApp';
import AuthPage from './Layouts/Auth/AuthPage/AuthPage';
import NewChatModal from './Layouts/NewChatModal/NewChatModal';
import Backdrop from './UI/Backdrop/Backdrop';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as authActions from './store/actions/authActions';

const App = props => {

  let { isAuthenticated, onAutoLogIn } = props;
  let [showBackdrop, setBackdropVisibility] = useState(false);
  let [showModal, setModalVisibility] = useState(false);
  let [showMessageMobile, setShowMessageMobile] = useState(false);

  const switchShowMessageMobile = () => {
    setShowMessageMobile(!showMessageMobile);
  }

  const onCreateNewChat = () => {
    setBackdropVisibility(true);
    setModalVisibility(true);
  }

  const onCancelNewChat = () => {
    setBackdropVisibility(false);
    setModalVisibility(false);
  }

  useEffect(() => {
    if (!isAuthenticated) onAutoLogIn();
    if (!isAuthenticated) props.history.push('/auth');
  }, [isAuthenticated, props.history, onAutoLogIn])

  return (
    <div className="App">
      <Backdrop
        show={showBackdrop}
        clicked={onCancelNewChat}
      />
      <NewChatModal
        show={showModal}
        onCancel={onCancelNewChat}
      />
      <Header
        isAuthenticated={isAuthenticated}
        onCreateNewChat={onCreateNewChat}
        switchModeMobile={switchShowMessageMobile}
        showCancelButton={showMessageMobile}
      />
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/" exact
          render={
            (props) => <MainApp {...props} switchModeMobile={switchShowMessageMobile} showMessageMobile={showMessageMobile} />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoLogIn: () => dispatch(authActions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));




// #61dafb React blue