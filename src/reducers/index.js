import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';

const rootReducer = combineReducers({
  //state: (state = {}) => state
    posts: PostsReducer
});

export default rootReducer;
