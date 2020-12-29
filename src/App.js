import './App.css';
import Header from './containers/Header/Header';
import MainApp from './Layouts/Main-App/MainApp';
import AuthPage from './Layouts/Auth/AuthPage/AuthPage';
import NewChatModal from './Layouts/NewChatModal/NewChatModal';
import Backdrop from './UI/Backdrop/Backdrop';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = props => {
  
  let { isAuthenticated } = props;
  let [showBackdrop, setBackdropVisibility] = useState(false);
  let [showModal, setModalVisibility] = useState(false);

  const onCreateNewChat = () => {
    setBackdropVisibility(true);
    setModalVisibility(true);
  }

  const onCancelNewChat = () => {
    setBackdropVisibility(false);
    setModalVisibility(false);
  }

  useEffect(() => {
    if (!isAuthenticated) props.history.push('/auth');   
  }, [isAuthenticated, props.history])

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
      />
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/" exact component={MainApp} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps,null)(withRouter(App));




// #61dafb React blue