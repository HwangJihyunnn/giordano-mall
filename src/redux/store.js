import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import productReduce from './reducers/productReduce';
import rootReducer from './reducers' //리듀서를 합친 파일임. 굳이 인덱스 파일명을 명시하지 않아도 됨.

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;