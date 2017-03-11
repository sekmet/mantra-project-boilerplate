import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';
import { Router, Route, Link , IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux'


import MainLayout from './components/main_layout.jsx';

// Membership
import Register from '../membership/containers/register';
import Login from '../membership/containers/login';

import Home from './components/home.jsx';

export default function (injectDeps, {Redux}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const history = syncHistoryWithStore(browserHistory, Redux);

  let PageList = [
    {path: "/register", component:Register},
    {path: "/login", component:Login}
  ];

  let routes = PageList.map((page,index)=>{
    let childRoute;
    if(page.childRoute) {
      childRoute = page.childRoute.map((child, index)=> {
        return child.indexRoute ?
          <IndexRoute component={child.component} key={index} />
          : <Route path={child.path} component={child.component} key={index}/>
      })
    }

    return (<Route path={page.path} component={page.component} key={index}>
      {childRoute}
    </Route>)


  });

  $(document).ready(function () {
    ReactDOM.render(
      <Provider store={Redux}>
        <Router history={history}>
          <Route  component={MainLayoutCtx}>
            {routes}
            <Route path="*" component={Home}/>
          </Route>
        </Router>
      </Provider>,
      document.getElementById('app')
    );
  });

}
