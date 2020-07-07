import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux Import
import { createStore, combineReducers ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import NewsReducer from './store/reducers/NewsReducer';

const rootReducer = combineReducers({
  news:NewsReducer
  });

  const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

  
ReactDOM.render(
  
     <Provider store={store}>  <App /></Provider>
  ,
  document.getElementById('root')
);

