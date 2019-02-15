import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions/index'

class GoogleAuth extends Component {
  
  

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '114319266953-om3r8g0i1ah18f91ftme2fme217rie4e.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        
        this.auth = window.gapi.auth2.getAuthInstance();
        
        this.onAuthChange(this.auth.isSignedIn.get())

        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
    
  }

  onAuthChange = (isSignedIn) => {
    // console.log(this.auth)
    // this.setState({isSignedIn: this.auth.isSignedIn.get()})
    if(isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton = () => {
    if(this.props.isSignedIn === null) {
      return null
    } else if(this.props.isSignedIn) {
      return (<button 
      onClick={this.onSignOutClick}
      className='ui red google button'>
        <i className='google icon'></i>
        Log Out
      </button>)
    } else {
      return  (<button 
      onClick={this.onSignInClick}
      className='ui red google button'>
      <i className='google icon'></i>
      Sign in with google
    </button>)
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);