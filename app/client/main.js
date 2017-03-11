import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// modules
import coreModule from './modules/core';
import membershipModule from './modules/membership';

// reducers
const coreReducer = coreModule.reducer;
const membershipReducer = membershipModule.reducer;

const reducer = combineReducers({
  routing: routerReducer,
  ...coreReducer,
  ...membershipReducer
});

// init context
const context = initContext({reducer});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(membershipModule);
app.init();
