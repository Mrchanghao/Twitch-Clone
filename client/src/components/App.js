import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';


const App = () => {
  return(
      <div className='ui container'>
        <Router>
          <div>
          <Header />
          
          <Switch>
            <Route path='/' component={StreamList} exact />
            <Route path='/streams/new' component={StreamCreate} exact />
            <Route path='/streams/edit' component={StreamEdit} exact />
            <Route path='/streams/delete' component={StreamDelete} exact />
            <Route path='/streams/show' component={StreamShow} exact />
          </Switch>
          </div>
        </Router>
      </div>
  )
}

export default App;