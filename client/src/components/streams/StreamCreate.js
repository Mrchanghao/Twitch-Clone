import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions/index';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

  

  onSubmit = (formValues) => {
    // console.log(formValues)
    this.props.createStream(formValues);
  }

  render() {
    // console.log(this.props)
  return (
    <StreamForm onSubmit={this.onSubmit} />
  );
}
}




export default connect(null, {createStream})(StreamCreate);
