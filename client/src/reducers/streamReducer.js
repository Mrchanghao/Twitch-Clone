import { EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, DELETE_STREAM } from "../actions/types";
import _ from 'lodash';

// Object base reducer 

const streamReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case FETCH_STREAMS:
      
      return {...state, ..._.mapKeys(action.payload, 'id')}
    case CREATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case DELETE_STREAM:
      return _.omit(state, action.payload) // 액션 id 값에 해당 하는 속성을 삭제
    case EDIT_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state;
  }
};

export default streamReducer