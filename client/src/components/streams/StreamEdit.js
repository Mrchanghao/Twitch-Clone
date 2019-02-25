import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions/index';
import StreamForm from './StreamForm';

class StreamEdit extends Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.streamId);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.streamId, formValues)
  }

  render() {
    if(!this.props.stream) {
      return <h1 style={{textAlign: 'center'}}>Loading...</h1>
    } 
    return (
      <div>
        <h3>
          Stream 수정
        </h3>
        <StreamForm 
        initialValues={_.pick(this.props.stream, 'title', 'description')}
        onSubmit={this.onSubmit} />
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.streamId]
})

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
