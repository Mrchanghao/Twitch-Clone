import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions/index';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {
  
  componentDidMount () {
    this.props.fetchStreams()
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.streams !== nextProps.streams
  }

  renderAdmin = (stream) => {
    if(stream.userId === this.props.currentUserId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
            수정
          </Link>
          <Link 
            className='ui button negative' 
            to={`/streams/delete/${stream.id}`}>
              삭제
          </Link>
        </div>
      )
    } else {

    }
  }

  renderList = () => {
    return this.props.streams.map(item => {
      return (
        <div className='item' key={item.id}>
          {this.renderAdmin(item)}
          <i className='icon large camera middle aligned'></i>
          <div className='content'>
            <Link to={`/streams/${item.id}`} className='header'>
              {item.title}
            </Link>
            <p className='description'>{item.description}</p>
          </div>
          
        </div>
      )
    })
  }

  renderCreate = () => {
    if(this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to='/streams/new' className='ui button primary'>
            스트리밍 생성
          </Link>
        </div>
      )
    }
  }
  
  render() {
    console.log(this.props.streams)
    return (
      <div>
        <h2>스트림 리스트</h2>
        <div className='ui celled list'>
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps, {fetchStreams})(StreamList);
