import React, {Fragment} from 'react';
import Modal from '../Modal';
import history from '../../history';
import {connect} from 'react-redux'
import {deleteStream, fetchStream} from '../../actions/index';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component {
  
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchStream(this.props.match.params.streamId)
  }

  renderActions = () => {
    const {streamId} = this.props.match.params
    return (
      <Fragment>
        <button 
        onClick={() => this.props.deleteStream(streamId)} 
        className='ui button negative'>
          네
        </button>
        <Link to='/' className='ui button'>취소</Link>
    </Fragment>
    )
  }
  
  renderContent = () => {
    if(!this.props.stream) {
      return '정말 스트리밍을 삭제 하시겠습니까?'
    }
    return `정말 ${this.props.stream.title}을 삭제 하시겠습니까?`  
  }

  render() {
    if(!this.props.stream) {
      return <h1 style={{textAlign: 'center'}}>Loading...</h1>
    }
    return (   
        <Modal
        onDismiss={() => history.push('/')}
        title='스트리밍 삭제'
        content={this.renderContent()}
        actions={this.renderActions()}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.streamId]
})

export default connect(mapStateToProps, {deleteStream, fetchStream})(StreamDelete);
