import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions/index';
import flv from 'flv.js';

class StreamShow extends React.Component {

  constructor(props) {
    super(props);
    this.videoRef = React.createRef();  
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.streamId)
    
    this.buildPlayer()
    
  }

  componentDidUpdate() {
    this.buildPlayer()
  }

  componentWillUnmount() {
    console.log('un mounted')
    this.player.destroy();
  }

  buildPlayer = () => {
    if(this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.streamId}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    // console.log(this.videoRef)
    this.player.load();
    this.player.play();
  }

  render() {
    const {stream} = this.props;
    if(!stream) {
      return (
        <h1>Loading ...</h1>
      )
    }
    return (
      <div>
        <video ref={this.videoRef} 
        controls
        style={{width: '100%'}} />
        <h1>{stream.title}</h1>
        <h3>{stream.description}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.streams[ownProps.match.params.streamId])
  return {
    stream: state.streams[ownProps.match.params.streamId]
  }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);
