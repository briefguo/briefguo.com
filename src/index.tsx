import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from '~components/Loading';

const Index = React.lazy(() => import('./pages/index'));

const BriefguoApp = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}></Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

ReactDOM.render(<BriefguoApp />, document.getElementById('__APP__'));
